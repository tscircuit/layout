import { AnySoupElement } from "@tscircuit/builder"
import * as AutoSch from "@tscircuit/schematic-autolayout"

export const autoLayoutSchematic = (soup: AnySoupElement[]) => {
  const scene = AutoSch.convertSoupToScene(soup)

  // We have to manually add the connections in a simple way to avoid
  // routing here
  // TODO waiting on builder to add all the source_traces to the soup prior
  // to calling layout methods
  // for (const trc of this.traces) {
  //   const { source_ports_in_route } = trc.getSourcePortsInRoute(elements)
  //   for (const [spa, spb] of pairs(source_ports_in_route)) {
  //     scene.connections.push({
  //       from: spa.source_port_id,
  //       to: spb.source_port_id,
  //     })
  //   }
  // }

  // console.log(JSON.stringify(scene))
  const laid_out_scene = AutoSch.ascendingCentralLrBug1(scene)
  // console.log(laid_out_scene)
  AutoSch.mutateSoupForScene(soup, laid_out_scene)
}
