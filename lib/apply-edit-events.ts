import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { AnySoupElement } from "@tscircuit/soup"
import { applyEditEvent } from "./apply-edit-event"

export const applyEditEvents = (
  soup: AnySoupElement[],
  editEvents: EditEvent[],
  bc: any
) => {
  for (const editEvent of editEvents) {
    applyEditEvent(soup, editEvent, bc)
  }
}
