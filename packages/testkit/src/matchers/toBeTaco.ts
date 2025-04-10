/**
 * Custom matcher to check if a string contains "taco" (case insensitive) or the taco emoji
 */

export function toBeTaco(
  this: { isNot: boolean; promise: string },
  received: unknown,
): { pass: boolean; message: () => string } {
  const pass =
    typeof received === "string" &&
    (received.toLowerCase().includes("taco") || received.includes("🌮"));

  const message = () =>
    pass
      ? `Expected "${received}" not to contain "taco" or 🌮`
      : `Expected "${received}" to contain "taco" or 🌮`;

  return { pass, message };
}
