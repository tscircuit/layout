import type { AnySoupElement } from "@tscircuit/builder"

export interface MinimalLayoutBuilder {
  name: string
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

export const layout = () => {
  const layoutBuilder: LayoutBuilder = {} as any

  // TODO
  layoutBuilder.autoLayoutSchematic = () => layoutBuilder

  // TODO
  layoutBuilder.manualPcbPositions = (positions) => layoutBuilder

  // TODO
  layoutBuilder.applyToSoup = (soup) => soup

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
