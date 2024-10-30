import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"
import test from "ava"
import { addManualTraceHints } from "lib/add-manual-trace-hints"

export const twoResistorSoup: AnyCircuitElement[] = [
  {
    type: "source_component",
    source_component_id: "simple_resistor_0",
    name: "R1",
    supplier_part_numbers: {
      jlcpcb: ["C2759650"],
    },
    ftype: "simple_resistor",
    resistance: 20_000,
    pcbX: 0,
    pcbY: 0,
    supplierPartNumbers: {
      jlcpcb: ["C2759650"],
    },
  },
  {
    type: "schematic_component",
    source_component_id: "simple_resistor_0",
    schematic_component_id: "schematic_component_simple_resistor_0",
    rotation: 0,
    size: {
      width: 1,
      height: 0.3,
    },
    center: {
      x: 0,
      y: 0,
    },
  },
  {
    type: "source_port",
    name: "left",
    source_port_id: "source_port_0",
    source_component_id: "simple_resistor_0",
  },
  {
    type: "schematic_port",
    schematic_port_id: "schematic_port_0",
    source_port_id: "source_port_0",
    center: {
      x: -0.5,
      y: 0,
    },
    facing_direction: "left",
    schematic_component_id: "schematic_component_simple_resistor_0",
  },
  {
    type: "pcb_port",
    pcb_port_id: "pcb_port_0",
    source_port_id: "source_port_0",
    pcb_component_id: "pcb_component_simple_resistor_0",
    x: -0.95,
    y: 0,
    layers: ["top"],
  },
  {
    type: "source_port",
    name: "right",
    source_port_id: "source_port_1",
    source_component_id: "simple_resistor_0",
  },
  {
    type: "schematic_port",
    schematic_port_id: "schematic_port_1",
    source_port_id: "source_port_1",
    center: {
      x: 0.5,
      y: 0,
    },
    facing_direction: "right",
    schematic_component_id: "schematic_component_simple_resistor_0",
  },
  {
    type: "pcb_port",
    pcb_port_id: "pcb_port_1",
    source_port_id: "source_port_1",
    pcb_component_id: "pcb_component_simple_resistor_0",
    x: 0.95,
    y: 0,
    layers: ["top"],
  },
  {
    type: "schematic_text",
    text: "R1",
    schematic_text_id: "schematic_text_0",
    schematic_component_id: "schematic_component_simple_resistor_0",
    anchor: "left",
    position: {
      x: -0.2,
      y: -0.5,
    },
    rotation: 0,
  },
  {
    type: "schematic_text",
    text: "20kohm",
    schematic_text_id: "schematic_text_1",
    schematic_component_id: "schematic_component_simple_resistor_0",
    anchor: "left",
    position: {
      x: -0.2,
      y: -0.3,
    },
    rotation: 0,
  },
  {
    type: "pcb_component",
    source_component_id: "simple_resistor_0",
    pcb_component_id: "pcb_component_simple_resistor_0",
    layer: "top",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    width: 3.0999999999999996,
    height: 1.2,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -0.95,
    y: 0,
    width: 1.2,
    height: 1.2,
    layer: "top",
    pcb_component_id: "pcb_component_simple_resistor_0",
    port_hints: ["1", "left"],
    pcb_port_id: "pcb_port_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_2",
    shape: "rect",
    x: 0.95,
    y: 0,
    width: 1.2,
    height: 1.2,
    layer: "top",
    pcb_component_id: "pcb_component_simple_resistor_0",
    port_hints: ["2", "right"],
    pcb_port_id: "pcb_port_1",
  },
  {
    type: "source_component",
    source_component_id: "simple_resistor_1",
    name: "R2",
    supplier_part_numbers: {
      jlcpcb: ["C2759650"],
    },
    ftype: "simple_resistor",
    resistance: 20_000,
  },
  {
    type: "schematic_component",
    source_component_id: "simple_resistor_1",
    schematic_component_id: "schematic_component_simple_resistor_1",
    rotation: 0,
    size: {
      width: 1,
      height: 0.3,
    },
    center: {
      x: 0,
      y: 0,
    },
  },
  {
    type: "source_port",
    name: "left",
    source_port_id: "source_port_2",
    source_component_id: "simple_resistor_1",
  },
  {
    type: "schematic_port",
    schematic_port_id: "schematic_port_2",
    source_port_id: "source_port_2",
    center: {
      x: -0.5,
      y: 0,
    },
    facing_direction: "left",
    schematic_component_id: "schematic_component_simple_resistor_1",
  },
  {
    type: "pcb_port",
    pcb_port_id: "pcb_port_2",
    source_port_id: "source_port_2",
    pcb_component_id: "pcb_component_simple_resistor_1",
    x: 4.05,
    y: 0,
    layers: ["top"],
  },
  {
    type: "source_port",
    name: "right",
    source_port_id: "source_port_3",
    source_component_id: "simple_resistor_1",
  },
  {
    type: "schematic_port",
    schematic_port_id: "schematic_port_3",
    source_port_id: "source_port_3",
    center: {
      x: 0.5,
      y: 0,
    },
    facing_direction: "right",
    schematic_component_id: "schematic_component_simple_resistor_1",
  },
  {
    type: "pcb_port",
    pcb_port_id: "pcb_port_3",
    source_port_id: "source_port_3",
    pcb_component_id: "pcb_component_simple_resistor_1",
    x: 5.95,
    y: 0,
    layers: ["top"],
  },
  {
    type: "schematic_text",
    text: "R2",
    schematic_text_id: "schematic_text_2",
    schematic_component_id: "schematic_component_simple_resistor_1",
    anchor: "left",
    position: {
      x: -0.2,
      y: -0.5,
    },
    rotation: 0,
  },
  {
    type: "schematic_text",
    text: "20kohm",
    schematic_text_id: "schematic_text_3",
    schematic_component_id: "schematic_component_simple_resistor_1",
    anchor: "left",
    position: {
      x: -0.2,
      y: -0.3,
    },
    rotation: 0,
  },
  {
    type: "pcb_component",
    source_component_id: "simple_resistor_1",
    pcb_component_id: "pcb_component_simple_resistor_1",
    layer: "top",
    center: {
      x: 5,
      y: 0,
    },
    rotation: 0,
    width: 3.1,
    height: 1.2,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    shape: "rect",
    x: 4.05,
    y: 0,
    width: 1.2,
    height: 1.2,
    layer: "top",
    pcb_component_id: "pcb_component_simple_resistor_1",
    port_hints: ["1", "left"],
    pcb_port_id: "pcb_port_2",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_3",
    shape: "rect",
    x: 5.95,
    y: 0,
    width: 1.2,
    height: 1.2,
    layer: "top",
    pcb_component_id: "pcb_component_simple_resistor_1",
    port_hints: ["2", "right"],
    pcb_port_id: "pcb_port_3",
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_0",
    connected_source_port_ids: ["source_port_1", "source_port_2"],
  },
  {
    type: "schematic_trace",
    source_trace_id: "source_trace_0",
    schematic_trace_id: "schematic_trace_0",
    edges: [
      {
        from: {
          x: 0.8,
          y: 0,
        },
        to: {
          x: 0.7,
          y: 0,
        },
      },
      {
        from: {
          x: 0.7,
          y: 0,
        },
        to: {
          x: 0.7,
          y: 0.20000000000000018,
        },
      },
      {
        from: {
          x: 0.7,
          y: 0.20000000000000018,
        },
        to: {
          x: -0.8,
          y: 0.20000000000000018,
        },
      },
      {
        from: {
          x: -0.8,
          y: 0.20000000000000018,
        },
        to: {
          x: -0.8,
          y: 0,
        },
      },
    ],
  },
  {
    type: "pcb_trace",
    pcb_trace_id: "pcb_trace_0",
    source_trace_id: "source_trace_0",
    route: [
      {
        route_type: "wire",
        layer: "top",
        width: 0.2,
        x: 1,
        y: 0,
      },
      {
        route_type: "wire",
        layer: "top",
        width: 0.2,
        x: 4,
        y: 0,
      },
    ],
  },
  {
    type: "pcb_board",
    center: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 40,
  },
] as any

test("apply manual trace hints", (t) => {
  const soup = JSON.parse(JSON.stringify(twoResistorSoup))
  addManualTraceHints(
    soup,
    [
      {
        pcb_port_selector: ".R1 > .right",
        offsets: [
          {
            x: 2.0064304035250835,
            y: 1.661761092866171,
            via: false,
          },
          {
            x: 3.9997126968305903,
            y: 2.1849976948588665,
            via: false,
          },
        ],
      },
    ],
    { getId: () => "someid" } as any
  )
  const ths = su(soup).pcb_trace_hint.list()
  t.is(ths.length, 1)
})
