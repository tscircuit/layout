import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { AnySoupElement, PcbTraceHint } from "@tscircuit/soup"
import { su } from "@tscircuit/soup-util"

export const applyEditEvent = (
  soup: AnySoupElement[],
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
