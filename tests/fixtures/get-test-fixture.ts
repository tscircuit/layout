import type { AnyCircuitElement } from "circuit-json"
import type { ExecutionContext } from "ava"
// import { logLayout } from "tests/utils/log-layout"
// import { createRoot } from "lib/render"

export const getTestFixture = (t: ExecutionContext) => {
  return {
    render: (elms: any): Promise<AnyCircuitElement[]> => {
      // const pb = createProjectBuilder()

      // return createRoot().render(elms, pb) as any as Promise<AnyCircuitElement[]>
      return null as any
    },
    logSoup: (soup: AnyCircuitElement[]) => {
      // return logLayout(t.title, soup)
    },
  }
}
