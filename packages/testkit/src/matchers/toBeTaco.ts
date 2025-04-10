/**
 * Custom matcher to check if a string contains "taco" (case insensitive) or the taco emoji
 */

export function toBeTaco(
  this: { isNot: boolean },
  received: unknown,
): { pass: boolean; message: () => string } {
  const pass =
    typeof received === "string" &&
    (received.toLowerCase().includes("taco") || received.includes("🌮"));

  const message = () => {
    if (pass) {
      return `Expected "${received}" not to contain "taco" or 🌮, but it does`;
    } else {
      return `Expected "${received}" to contain "taco" or 🌮, but it doesn't`;
    }
  };

  return { pass, message };
}
