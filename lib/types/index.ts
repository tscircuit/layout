import type { PcbRouteHint, AnyCircuitElement } from "circuit-json"
import { type ManualPcbPositionInput } from "lib/zod"
import { type EditEvent } from "@tscircuit/manual-edit-events"

export interface MinimalLayoutBuilder {
  name: string
  applyToSoup: (soup: AnyCircuitElement[]) => AnyCircuitElement[]
}

export interface ManualTraceHint {
  pcb_port_selector: string
  offsets: PcbRouteHint[]
}

export interface ManualEditFile {
  pcb_placements?: ManualPcbPositionInput[]
  manual_trace_hints?: ManualTraceHint[]

  /**
   * @deprecated edit events use ids instead of selectors so
   * aren't safe
   */
  edit_events?: EditEvent[]
}
