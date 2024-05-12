import type { PcbRouteHint, AnySoupElement } from "@tscircuit/soup"
import { type ManualPcbPositionInput } from "@tscircuit/builder"

export interface MinimalLayoutBuilder {
  name: string
  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}

export interface ManualTraceHint {
  pcb_port_selector: string
  offsets: PcbRouteHint[]
}

export interface ManualEditFile {
  pcb_placements?: ManualPcbPositionInput[]
  manual_trace_hints: ManualTraceHint[]
}
