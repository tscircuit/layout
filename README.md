# @tscircuit/layout

> [!NOTE]
> This package is in early development and is not yet ready for use.

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

WIP

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

## References

1. [Original Feature Request](https://github.com/tscircuit/tscircuit/issues/107)
