import { describe, it, expect } from "vitest";
import { toBeTaco } from "./index";

describe("index exports", () => {
  it("should export toBeTaco as a function", () => {
    expect(toBeTaco).toBeDefined();
    expect(typeof toBeTaco).toBe("function");
  });
});
