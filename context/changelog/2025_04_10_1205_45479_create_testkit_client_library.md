# create testkit consumer library

## Steps to create a test harness library for testkit

1. Create a new package directory structure:
   - `packages/testkit-harness/`
   - `packages/testkit-harness/src/`
   - `packages/testkit-harness/src/tests/`

2. Initialize the package:
   - Create package.json with dependencies on testkit
   - Set up TypeScript configuration
   - Configure Vite/Vitest for testing

3. Create basic structure:
   - Entry point (index.ts)
   - Test utilities
   - Example implementations using testkit matchers

4. Write integration tests:
   - Test the toBeTaco matcher
   - Test error cases and edge conditions
   - Verify custom error messages

5. Add to workspace configuration:
   - Update vitest.workspace.js
   - Add npm scripts for testing

6. Document usage examples:
   - How to use the testkit matchers
   - Common patterns and best practices
