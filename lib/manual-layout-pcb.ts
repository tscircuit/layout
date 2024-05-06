import {
  applySelector,
  transformPCBElements,
  type BuildContext,
} from "@tscircuit/builder"
import type {
  AnySoupElement,
  PCBComponent,
  AnySourceComponent,
} from "@tscircuit/soup"
import {
  type Matrix,
  compose,
  identity,
  translate,
} from "transformation-matrix"

export const manualLayoutPcb = (
  elements: AnySoupElement[],
  positions: any[],
  bc: BuildContext
) => {
  for (const pcb_position of positions) {
    const selector_matches = applySelector(
      elements as any,
      pcb_position.selector
    )
    if (selector_matches.length === 0) {
      elements.push({
        pcb_error_id: bc.getId("pcb_error"),
        type: "pcb_error",
        message: `No elements found for selector: "${pcb_position.selector}"`,
        error_type: "pcb_placement_error",
      })
      continue
    } else if (selector_matches.length > 1) {
      elements.push({
        pcb_error_id: bc.getId("pcb_error"),
        type: "pcb_error",
        message: `Multiple elements found for selector: "${pcb_position.selector}"`,
        error_type: "pcb_placement_error",
        // TODO add sources
      })
      continue
    }

    const source_component = selector_matches[0] as AnySourceComponent
    const pcb_component = elements.find(
      (e) =>
        e.type === "pcb_component" &&
        e.source_component_id === source_component.source_component_id
    ) as PCBComponent

    if (!pcb_component) {
      elements.push({
        pcb_error_id: bc.getId("pcb_error"),
        type: "pcb_error",
        message: `No pcb_component found for source component: "${source_component.source_component_id}"`,
        error_type: "pcb_placement_error",
      })
      continue
    }

    const relative_to = pcb_position.relative_to ?? "group_center"

    let mat: Matrix = identity()
    if (relative_to === "group_center") {
      const new_center = bc.convert(pcb_position.center) as unknown as {
        x: number
        y: number
      }
      mat = compose(
        translate(
          -(pcb_component.center?.x ?? 0),
          -(pcb_component.center?.y ?? 0)
        ),
        translate(new_center.x, new_center.y)
      )
    } else {
      throw new Error(
        'relative_to is currently not supported for selectors (try using "group_center"'
      )
    }

    transformPCBElements(
      elements.filter(
        (e) =>
          "pcb_component_id" in e &&
          e.pcb_component_id === pcb_component.pcb_component_id
      ) as any,
      mat
    )
  }
}
