import { addManualTraceHints } from "./lib/add-manual-trace-hints"
import {
  type BuildContext,
  type ManualPcbPosition,
  type ManualPcbPositionInput,
} from "@tscircuit/builder"
import { manual_pcb_position } from "./lib/zod"
import type { PcbRouteHint, AnySoupElement } from "@tscircuit/soup"
import { manualLayoutPcb } from "./lib/manual-layout-pcb"
import { autoLayoutSchematic } from "./lib/auto-layout-schematic"
import { z } from "zod"
import type {
  ManualEditFile,
  ManualTraceHint,
  MinimalLayoutBuilder,
} from "./lib/types"
import type { EditEvent } from "@tscircuit/manual-edit-events"
import { applyEditEvents } from "lib/apply-edit-events"

export * from "./lib/derive-selector-from-pcb-port-id"
export * from "./lib/get-manual-trace-hint-from-event"

export {
  manualLayoutPcb as internalManualLayoutPcb,
  autoLayoutSchematic as internalAutoLayoutSchematic,
}

export type { ManualEditFile, ManualTraceHint }

interface InternalLayoutBuilderProps {
  // ---- PCB ----
  manual_pcb_placement_enabled: boolean
  manual_pcb_placement_config?: {
    positions: ManualPcbPosition[]
  }

  // ---- Schematic ----
  auto_layout_schematic_enabled: boolean
  auto_layout_schematic_config?: {
    padding?: number | string
  }

  manual_trace_hints: ManualTraceHint[]

  edit_events: EditEvent[]
}

export interface LayoutBuilder extends InternalLayoutBuilderProps {
  autoLayoutSchematic: (opts?: { padding?: number }) => this

  manualPcbPlacement: (positions: ManualPcbPositionInput[]) => this

  manualEdits: (edits: ManualEditFile) => this

  extend: <const T extends MinimalLayoutBuilder>(
    ext: T
  ) => this & Omit<T, "applyToSoup">

  applyToSoup: (soup: AnySoupElement[], bc: BuildContext) => AnySoupElement[]
}

export const layout = () => {
  const layoutBuilder: LayoutBuilder = {
    manual_pcb_placement_enabled: false,
    auto_layout_schematic_enabled: false,
    manual_trace_hints: [],
    edit_events: [],
    autoLayoutSchematic(opts) {
      this.auto_layout_schematic_enabled = true
      this.auto_layout_schematic_config = opts
      return this
    },
    manualPcbPlacement(positions) {
      this.manual_pcb_placement_enabled = true
      this.manual_pcb_placement_config = {
        positions: z.array(manual_pcb_position).parse(positions),
      }
      return this
    },
    manualEdits(edits) {
      if (edits.pcb_placements || (edits as any).pcb_positions) {
        this.manualPcbPlacement?.(
          edits.pcb_placements || (edits as any).pcb_positions
        )
      }
      if (edits.manual_trace_hints) {
        this.manual_trace_hints = edits.manual_trace_hints
      }
      return this
    },
    applyToSoup(soup, bc) {
      if (this.auto_layout_schematic_enabled) {
        // apply auto layout schematic
        autoLayoutSchematic(soup, this.auto_layout_schematic_config, bc)
      }
      if (this.manual_pcb_placement_enabled) {
        manualLayoutPcb(
          soup as any,
          this.manual_pcb_placement_config!.positions,
          bc
        )
      }
      if (this.manual_trace_hints) {
        soup = addManualTraceHints(soup, this.manual_trace_hints, bc)
      }
      if (this.edit_events) {
        applyEditEvents(soup, this.edit_events, bc)
      }
      return soup
    },
  } as Partial<LayoutBuilder> & InternalLayoutBuilderProps as LayoutBuilder

  layoutBuilder.extend = (ext) => ({
    ...layoutBuilder,
    ...ext,
    name: undefined,
    applyToSoup: (soup, bc) => {
      return ext.applyToSoup(layoutBuilder.applyToSoup(soup, bc))
    },
  })

  return layoutBuilder
}
