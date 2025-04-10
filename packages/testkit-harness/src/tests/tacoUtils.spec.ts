import { describe, it, expect, beforeEach } from "vitest";
import {
  containsTaco,
  addTacoIfMissing,
  removeTacoReferences,
} from "../tacoUtils";
// Import directly from the source file to avoid module resolution issues
import { toBeTaco } from "@jaypie/testkit";

// Add the custom matcher to Jest/Vitest
declare module "vitest" {
  interface Assertion {
    toBeTaco(): void;
  }
}

describe("Taco Utilities", () => {
  // Set up the custom matcher
  beforeEach(() => {
    expect.extend({ toBeTaco });
  });

  describe("containsTaco", () => {
    it('should return true for strings containing "taco"', () => {
      expect(containsTaco("taco")).toBe(true);
      expect(containsTaco("TACO")).toBe(true);
      expect(containsTaco("I love tacos")).toBe(true);
    });

    it("should return true for strings containing the taco emoji", () => {
      expect(containsTaco("🌮")).toBe(true);
      expect(containsTaco("Let's eat 🌮 tonight")).toBe(true);
    });

    it("should return false for strings without taco references", () => {
      expect(containsTaco("burrito")).toBe(false);
      expect(containsTaco("hamburger")).toBe(false);
      expect(containsTaco("")).toBe(false);
    });
  });

  describe("addTacoIfMissing", () => {
    it("should add a taco emoji to strings without taco references", () => {
      const result = addTacoIfMissing("Hello world");
      expect(result).toBeTaco();
      expect(result).toContain("🌮");
    });

    it("should not modify strings that already contain taco references", () => {
      expect(addTacoIfMissing("taco")).toBe("taco");
      expect(addTacoIfMissing("I love tacos")).toBe("I love tacos");
      expect(addTacoIfMissing("🌮")).toBe("🌮");
    });
  });

  describe("removeTacoReferences", () => {
    it("should remove all taco references from strings", () => {
      expect(removeTacoReferences("taco")).toBe("");
      expect(removeTacoReferences("I love tacos")).toBe("I love");
      expect(removeTacoReferences("🌮")).toBe("");
      expect(removeTacoReferences("Let's eat 🌮 tonight")).toBe(
        "Let's eat tonight",
      );
    });

    it("should handle strings without taco references", () => {
      expect(removeTacoReferences("burrito")).toBe("burrito");
    });

    it("should clean up extra spaces", () => {
      expect(removeTacoReferences("taco taco taco")).toBe("");
      expect(removeTacoReferences("Let's eat taco and 🌮 tonight")).toBe(
        "Let's eat and tonight",
      );
    });
  });

  describe("integration with toBeTaco matcher", () => {
    it("should work with the toBeTaco matcher", () => {
      // These should pass the toBeTaco matcher
      expect("taco").toBeTaco();
      expect("TACO").toBeTaco();
      expect("I love tacos").toBeTaco();
      expect("🌮").toBeTaco();

      // These should fail the toBeTaco matcher
      expect("burrito").not.toBeTaco();
      expect("").not.toBeTaco();

      // Test that our utility functions work with the matcher
      expect(addTacoIfMissing("Hello")).toBeTaco();
      expect(removeTacoReferences("taco")).not.toBeTaco();
    });
  });
});
