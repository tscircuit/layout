import type { AnySoupElement } from "@tscircuit/soup"
import { any_soup_element } from "@tscircuit/soup"
import { z } from "zod"
import test from "ava"

import { applyEditEvents } from "lib/apply-edit-events"

export const twoResistorSoup: AnySoupElement[] = z
  .array(any_soup_element)
  .parse([
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
      pcbX: 5,
      pcbY: 0,
      supplierPartNumbers: {
        jlcpcb: ["C2759650"],
      },
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
  ])

test("applyEditEvents", (t) => {
  const soup = JSON.parse(JSON.stringify(twoResistorSoup))
  applyEditEvents(
    soup,
    [
      {
        pcb_edit_event_type: "edit_trace_hint",
        pcb_port_id: "pcb_port_1",
        pcb_trace_hint_id: "0.2601687380440185",
        route: [
          {
            x: 1.5241172287691853,
            y: 2.079915739581276,
            via: false,
          },
          {
            x: 2.903727036115768,
            y: 2.2414916629642088,
            via: false,
          },
        ],
        created_at: 1718320323016,
        edit_event_id: "0.8855310164080794",
        in_progress: false,
      },
    ],
    {} as any
  )

  t.notDeepEqual(soup, twoResistorSoup)
})
