import type { AnySoupElement, PcbTraceHint } from "@tscircuit/soup"
import type { ManualTraceHint } from "./types"
import type { BuildContext } from "@tscircuit/builder"
import { su } from "@tscircuit/soup-util"

export const addManualTraceHints = (
  soup: AnySoupElement[],
  manual_trace_hints: ManualTraceHint[],
  bc: BuildContext
) => {
  // Add trace hints
  for (const hint of manual_trace_hints) {
    const pcb_port = su(soup as any).pcb_trace_hint.select(
      hint.pcb_port_selector
    )

    if (!pcb_port) {
      // TODO add pcb_error, indicate unused manual edit
      continue
    }

    if (hint.offsets.length === 0) {
      // TODO add pcb_error, indicate empty manual trace hint
      continue
    }

    // Create the trace hint
    const trace_hint: PcbTraceHint = {
      type: "pcb_trace_hint",
      pcb_component_id: pcb_port.pcb_component_id,
      pcb_port_id: pcb_port.pcb_port_id,
      route: hint.offsets.map((offset) => ({
        x: offset.x,
        y: offset.y,
        via: offset.via,
        to_layer: (offset as any).to_layer,
      })),
    }

    soup.push(trace_hint)
  }

  return soup
}
