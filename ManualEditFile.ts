import { type ManualPcbPositionInput } from "@tscircuit/builder"
import { ManualTraceHint } from "."

export interface ManualEditFile {
  pcb_placements?: ManualPcbPositionInput[]
  manual_trace_hints: ManualTraceHint[]
}
