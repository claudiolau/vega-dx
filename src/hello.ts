import type { IName } from "./types";

/**
 * Greets a person by name.
 * @param {IName} name - The name of the person to greet.
 * @returns {string} A greeting message.
 */

export function hello(name: IName) {
  return `Hello ${name}!`;
}
