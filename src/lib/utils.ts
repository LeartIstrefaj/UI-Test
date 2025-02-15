// // src/lib/utils.ts
// export function cn(...classes: (string | boolean | undefined | null)[]): string {
//     return classes.filter(Boolean).join(" ");
//   }



/**
 * Utility function to concatenate classNames.
 */
export const cn = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join(" ")
}

/**
 * Asynchronous sleep function.
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

