import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { ManualTraceHint } from "./types"
import { deriveSelectorFromPcbPortId } from "./derive-selector-from-pcb-port-id"
import type { AnySoupElement } from "@tscircuit/soup"

/**
 * Get the manual trace hint from an edit event
 */
export const getManualTraceHintFromEvent = (
  soup: AnySoupElement[],
  editEvent: EditEvent
): ManualTraceHint => {
  if (editEvent.pcb_edit_event_type !== "edit_trace_hint") {
    throw new Error("editEvent is not a trace hint")
  }

  const {
    created_at,
    edit_event_id,
    pcb_edit_event_type,
    pcb_port_id,
    route,
    pcb_trace_hint_id,
  } = editEvent

  // Find the port position

  const manualTraceHint: ManualTraceHint = {
    pcb_port_selector: deriveSelectorFromPcbPortId({ soup, pcb_port_id }),
    offsets: route.map((r) => ({
      x: r.x,
      y: r.y,
      via: r.via,
    })),
  }

  return manualTraceHint
}
