/**
 * Type declarations for `micromorph`.
 *
 * The package ships a broken `types` field in package.json.
 * This shim restores type information for TypeScript 7+.
 */
declare module "micromorph" {
  export default function micromorph(from: Node, to: Node): Promise<void>

  export interface Patch {
    type: number
    [key: string]: any
  }
  export function diff(from: Node | undefined, to: Node | undefined): undefined | Patch
  export function patch(container: Node, patch: Patch): Promise<void>
}
