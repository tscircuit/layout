import type { AnySoupElement } from "@tscircuit/builder"

export interface MinimalLayoutBuilder {
  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}

export interface LayoutBuilder {
  autoLayoutSchematic: () => this

  manualPcbPositions: (
    positions: { selector: string; x: number; y: number }[]
  ) => this

  extend: <const T extends MinimalLayoutBuilder>(
    ext: T
  ) => this & Omit<T, "applyToSoup">

  applyToSoup: (soup: AnySoupElement[]) => AnySoupElement[]
}
