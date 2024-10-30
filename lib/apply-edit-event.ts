import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { AnyCircuitElement, PcbTraceHint } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const applyEditEvent = (
  soup: AnyCircuitElement[],
  editEvent: EditEvent,
  bc: any
) => {
  if (editEvent.pcb_edit_event_type === "edit_component_location") {
    // TODO
    return
  } else if (editEvent.pcb_edit_event_type === "edit_trace_hint") {
    const { route, pcb_trace_hint_id, pcb_port_id } = editEvent

    const traceHint: PcbTraceHint = {
      pcb_trace_hint_id: pcb_trace_hint_id ?? bc.getId("pcb_trace_hint"),
      type: "pcb_trace_hint",
      pcb_port_id,
      pcb_component_id: su(soup).pcb_component.getUsing({ pcb_port_id })
        ?.pcb_component_id!,
      route,
    }

    soup.push(traceHint)
  }
}
