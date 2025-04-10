# testkit taco matcher

1. Delete packages/testkit/tests/index.test.ts

2. Delete greet in packages/testkit/src/index.ts.

3. Create a new file, packages/testkit/src/matchers/toBeTaco.ts

This is a jest matcher that should be compatible with vitest. It should check, case insensitive, for "taco" or the 🌮 emoji.

It should be used like this:

```javascript
expect("Taco Town USA").toBeTaco(); // Passes
expect("Nacho, nacho man!").toBeTaco(); // Fails
```

4. Create a new test, packages/testkit/src/matchers/toBeTaco.spec.ts. Follow [Jaypie Tests](../lib/jaypie/Jaypie_Add_Vitest_Tests.md)

5. Add { toBeTaco } as the lone export of index.js

6. Create a new test, packages/testkit/src/index.spec.ts. Just check that toBeTaco is exported and is a function; don't repeat all the other tests.

7. Lint.

8. Run tests.

