import { describe, it, expect } from "vitest";
import * as harness from "./index";

describe("testkit-harness exports", () => {
  it("should export the tacoUtils functions", () => {
    expect(harness).toHaveProperty("containsTaco");
    expect(harness).toHaveProperty("addTacoIfMissing");
    expect(harness).toHaveProperty("removeTacoReferences");

    expect(typeof harness.containsTaco).toBe("function");
    expect(typeof harness.addTacoIfMissing).toBe("function");
    expect(typeof harness.removeTacoReferences).toBe("function");
  });
});
