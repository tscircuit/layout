export type BuildContext = {
  getId: (prefix: string) => string
  convert: (v: number | string) => number
}
