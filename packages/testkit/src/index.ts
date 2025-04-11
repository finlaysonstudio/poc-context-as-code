/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @jaypie/testkit
 * Testing utilities for Jaypie projects
 */

import { toBeTaco } from "./matchers/toBeTaco";

export { toBeTaco };

import "@vitest/expect";

interface CustomMatchers<R = any> {
  toBeTaco(): R;
}

declare module "@vitest/expect" {
  interface Assertion<T = any> extends CustomMatchers<T> {
    toBe(expected: T): void;
  }
  interface AsymmetricMatchersContaining extends CustomMatchers {
    toBe(expected: unknown): unknown;
  }
}
