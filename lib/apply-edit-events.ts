import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { AnyCircuitElement } from "circuit-json"
import { applyEditEvent } from "./apply-edit-event"

export const applyEditEvents = (
  soup: AnyCircuitElement[],
  editEvents: EditEvent[],
  bc: any
) => {
  for (const editEvent of editEvents) {
    applyEditEvent(soup, editEvent, bc)
  }
}
