import {
  manual_pcb_position,
  type AnySoupElement,
  type BuildContext,
  type ManualPcbPosition,
  type ManualPcbPositionInput,
} from "@tscircuit/builder"
import { manualLayoutPcb } from "./lib/manual-layout-pcb"
import { autoLayoutSchematic } from "./lib/auto-layout-schematic"
import { z } from "zod"

export {
  manualLayoutPcb as internalManualLayoutPcb,
  autoLayoutSchematic as internalAutoLayoutSchematic,
}

export interface MinimalLayoutBuilder {
  name: string
  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}

export interface LayoutBuilder {
  autoLayoutSchematic: (opts?: { padding?: number }) => this

  manualPcbPlacement: (positions: ManualPcbPositionInput[]) => this

  extend: <const T extends MinimalLayoutBuilder>(
    ext: T
  ) => this & Omit<T, "applyToSoup">

  applyToSoup: (soup: AnySoupElement[], bc: BuildContext) => AnySoupElement[]
}

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
}

export const layout = () => {
  const layoutBuilder: LayoutBuilder = {
    manual_pcb_placement_enabled: false,
    auto_layout_schematic_enabled: false,
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
    applyToSoup(soup, bc) {
      if (this.auto_layout_schematic_enabled) {
        // apply auto layout schematic
      }
      if (this.manual_pcb_placement_enabled) {
        manualLayoutPcb(
          soup as any,
          this.manual_pcb_placement_config!.positions,
          bc
        )
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
