/**
 * Utility functions for working with taco-related strings
 * Used to demonstrate the testkit's toBeTaco matcher
 */

/**
 * Checks if a string contains the word "taco" (case insensitive) or the taco emoji
 */
export function containsTaco(text: string): boolean {
  return text.toLowerCase().includes("taco") || text.includes("🌮");
}

/**
 * Adds taco references to a string if it doesn't already have them
 */
export function addTacoIfMissing(text: string): string {
  if (containsTaco(text)) {
    return text;
  }
  return `${text} 🌮`;
}

/**
 * Removes all taco references from a string
 */
export function removeTacoReferences(text: string): string {
  return text
    .replace(/tacos?/gi, "") // Match "taco" or "tacos"
    .replace(/🌮/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
