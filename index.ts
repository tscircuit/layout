import type { AnySoupElement } from "@tscircuit/builder"

export interface MinimalLayoutBuilder {
  name: string
  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}

export interface LayoutBuilder {
  autoLayoutSchematic: () => this

  manualPcbPlacement: (
    positions: { selector: string; x: number; y: number }[]
  ) => this

  extend: <const T extends MinimalLayoutBuilder>(
    ext: T
  ) => this & Omit<T, "applyToSoup">

  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}

interface InternalLayoutBuilderProps {
  manual_pcb_placement_enabled: boolean
  auto_layout_schematic_enabled: boolean
}

export const layout = () => {
  const layoutBuilder: LayoutBuilder = {
    manual_pcb_placement_enabled: false,
    auto_layout_schematic_enabled: false,
    autoLayoutSchematic() {},
    manualPcbPlacement(positions) {
      this.middlewares.push()
    },
    applyToSoup(soup) {
      return soup
    },
  } as Partial<LayoutBuilder> & InternalLayoutBuilderProps as LayoutBuilder

  layoutBuilder.extend = (ext) => ({
    ...layoutBuilder,
    ...ext,
    name: undefined,
    applyToSoup: (soup) => {
      return ext.applyToSoup(layoutBuilder.applyToSoup(soup))
    },
  })

  return layoutBuilder
}
