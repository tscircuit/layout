import type { AnySoupElement } from "@tscircuit/soup"
import { su } from "@tscircuit/soup-util"

export const deriveSelectorFromPcbPortId = ({
  soup,
  pcb_port_id,
}: {
  soup: AnySoupElement[]
  pcb_port_id: string
}) => {
  const pcb_component = su(soup as any).pcb_port.getUsing({
    pcb_port_id,
  })
  if (!pcb_component) {
    throw new Error(
      `Could not find pcb component for pcb_port_id="${pcb_port_id}"`
    )
  }
  const source_component = su(soup as any).source_component.getUsing({
    pcb_component_id: pcb_component?.pcb_component_id!,
  })
  if (!source_component) {
    throw new Error(
      `Could not find source component for pcb_component_id="${pcb_component.pcb_component_id}"`
    )
  }
  const source_port = su(soup as any).source_port.getUsing({
    pcb_port_id,
  })
  if (!source_port) {
    throw new Error(
      `Could not find source port for pcb_port_id="${pcb_port_id}"`
    )
  }

  // TODO travel up the tree to make the selector more specific

  return `.${source_component.name} > .${source_port.name}`
}
