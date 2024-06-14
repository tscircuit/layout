import type { BuildContext } from "@tscircuit/builder"
import type { EditEvent } from "@tscircuit/manual-edit-events"
import type { AnySoupElement } from "@tscircuit/soup"
import { applyEditEvent } from "./apply-edit-event"

export const applyEditEvents = (
  soup: AnySoupElement[],
  editEvents: EditEvent[],
  bc: BuildContext
) => {
  for (const editEvent of editEvents) {
    applyEditEvent(soup, editEvent, bc)
  }
}
