import { type ManualPcbPositionInput } from "@tscircuit/builder"
import type { ManualTraceHint } from "."

export interface ManualEditFile {
  pcb_placements?: ManualPcbPositionInput[]
  manual_trace_hints: ManualTraceHint[]
}
