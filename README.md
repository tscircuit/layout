# @tscircuit/layout

[Main `tscircuit` package](https://github.com/tscircuit/tscircuit) | [tscircuit.com](https://tscircuit.com) | [tscircuit docs](https://docs.tscircuit.com/)

[![npm version](https://badge.fury.io/js/@tscircuit/layout.svg)](https://www.npmjs.com/package/@tscircuit/layout)

This package defines the main API for the layout builder for tscircuit.

```tsx
import { layout } from "@tscircuit/layout" // or "tscircuit"

export const MyCircuit = () => (
  <group layout={layout()
    .auto_layout_schematic({ padding: 2 })
    .manual_pcb_positions({ ... })}>
   {/* ... */}
  </group>
)
```

## Extending the Layout Builder

> [!NOTE]
> Soup is a JSON data format that represents the components of a circuit. [Learn more](https://docs.tscircuit.com/api-reference/advanced/soup)

The layout builder is designed to be extensible. You can add new layout mechanism
like this:

```tsx
import { layout } from "@tscircuit/layout"

const customLayout = layout().extend({
  name: "Move to Layer",
  setLayer(layer: string) {
    this.layer = layer
    return this
  },
  applyToSoup(soup) {
    return soup.map((component) => {
      if ("layer" in component) {
        component.layer = this.layer
      }
    }
  }
})

export const MyCircuit = () => (
  <group layout={customLayout.setLayer("top")}>
   {/* ... */}
  </group>
)

```

## Changing the layout builder defaults

The recommended way to do this is to create a new layout builder in your project
with the defaults configured like so:

```tsx
// lib/layout.ts
import { layout as builtinLayout } from "@tscircuit/layout"

export const layout = () =>
  builtinLayout().auto_layout_schematic({ padding: 2 })
```

```tsx
// lib/MyCircuit.tsx

import { layout } from "lib/layout"

export const MyCircuit = () => <group layout={layout()}>{/* ... */}</group>
```

## Motivation

In web development, there is a robust flexbox/grid system that has been developed
over decades to allow the definition placement through data attributes via CSS.
tscircuit needs complex layout and significant R&D would be required to develop
attributes that can quickly and simply define schematics and PCB layouts in code.
To speed up the development of the data attribute language, `@tscircuit/layout`
provides an extensible builder pattern with a flexible data definition mechanism.
The layout builder will constantly be extended with new capabilities and users
can easily implement the APIs or load in custom plugins to extend the capabilities.
Over time dominant patterns will emerge and an optimized data-attribute system
can be built.

## Limitations

This is a _synchronous_ layout builder. Many complex designs will require
computationally intensive asynchronous layout solvers. For those layouts, you
can use a [baker](https://github.com/tscircuit/tscircuit/issues/108).

Synchronous layout builders are extremely useful because they give realtime
feedback and can form the "starting conditions" of a large bake. Moreover, for
95% of circuits that are "good enough" without baking.

## References

1. [Original Feature Request](https://github.com/tscircuit/tscircuit/issues/107)
