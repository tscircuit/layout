import type { AnySoupElement, SourcePort, SourceTrace } from "@tscircuit/soup"
import * as AutoSch from "@tscircuit/schematic-autolayout"
import { pairs } from "./utils/pairs"
import { su } from "@tscircuit/soup-util"

export const getSourcePortsInRoute = (
  trc: SourceTrace,
  soup: AnySoupElement[]
): SourcePort[] => {
  const source_ports_in_route = []
  for (const source_port_id of trc.connected_source_port_ids) {
    const source_port = su(soup as any).source_port.get(source_port_id)
    if (source_port) {
      source_ports_in_route.push(source_port)
    }
  }
  return source_ports_in_route
}

export const autoLayoutSchematic = (soup: AnySoupElement[]) => {
  const scene = AutoSch.convertSoupToScene(soup as any)

  // We have to manually add the connections in a simple way to avoid
  // routing here
  // TODO waiting on builder to add all the source_traces to the soup prior
  // to calling layout methods
  for (const trc of su(soup as any).source_trace.list()) {
    const source_ports_in_route = getSourcePortsInRoute(trc, soup)
    for (const [spa, spb] of pairs(source_ports_in_route)) {
      scene.connections.push({
        from: spa.source_port_id,
        to: spb.source_port_id,
      })
    }
  }

  // console.log(JSON.stringify(scene))
  const laid_out_scene = AutoSch.ascendingCentralLrBug1(scene)
  // console.log(laid_out_scene)
  AutoSch.mutateSoupForScene(soup as any, laid_out_scene)
}
