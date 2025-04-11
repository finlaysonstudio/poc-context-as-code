# export taco matcher type

Install vite-plugin-dts as a dev dependency at the top level

Create a new types file in packages/testkit/src/types.d.ts to define the taco matcher type:

```typescript
import "@vitest/expect"; // Import to ensure this file is treated as a module

declare module "@vitest/expect" {
  // Extend Vitest's assertion interfaces with our custom matcher
  interface Assertion<T = unknown> {
    toBeTaco(): T; // our matcher returns the same type as the received for chaining
  }
  interface AsymmetricMatchersContaining {
    toBeTaco(): unknown;
  }
}

export {};
```

Configure packages/testkit/vite.config.ts to import dts from 'vite-plugin-dts' and use plugins: [dts()]
