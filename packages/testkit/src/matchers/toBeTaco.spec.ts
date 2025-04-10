import { describe, it, expect, beforeEach } from "vitest";
import { toBeTaco } from "./toBeTaco";

// Add the custom matcher to Jest/Vitest
declare module "vitest" {
  interface Assertion {
    toBeTaco(): void;
  }
}

describe("toBeTaco matcher", () => {
  beforeEach(() => {
    expect.extend({ toBeTaco });
  });

  it("should pass for strings containing 'taco' (case insensitive)", () => {
    expect("taco").toBeTaco();
    expect("TACO").toBeTaco();
    expect("Taco").toBeTaco();
    expect("I love tacos").toBeTaco();
    expect("Welcome to Taco Town USA").toBeTaco();
  });

  it("should pass for strings containing the taco emoji", () => {
    expect("🌮").toBeTaco();
    expect("Let's eat 🌮 tonight").toBeTaco();
  });

  it("should fail for strings without 'taco' or the taco emoji", () => {
    const matcherResult = toBeTaco.call({ isNot: false }, "Nacho, nacho man!");
    expect(matcherResult.pass).toBe(false);
  });

  it("should handle non-string inputs", () => {
    const matcherResult = toBeTaco.call({ isNot: false }, 123);
    expect(matcherResult.pass).toBe(false);
  });
});
