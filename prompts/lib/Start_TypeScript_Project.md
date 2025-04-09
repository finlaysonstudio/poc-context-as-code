# Start TypeScript Project 🚀

You will assist setting up a new TypeScript project for the user

## 🎯 Goal

* Modern TypeScript
* NPM workspaces within ./packages/
* ESLint and Prettier
* Vite to bundle TypeScript
* Vitest

## ℹ️ Initial Questions

Start by clarifying with the user:

* What is the name of the top-level package? (suggest one from the folder name)
* What is the name of the first package's folder? (suggest cli)
* What is the name of the first package? (suggest a logical mashup of top-level and first package; "my-project" and "cli" would be "my-project-cli", but "@orgproject/monorepo" might be "@orgproject/cli")
* Make note of any answers in your output file is available

## 📋 Suggested Process

1. **Initialize the project structure**:
   ```bash
   # Create the project directory if it doesn't exist
   mkdir -p packages/<package-folder>
   ```

2. **Initialize the root package.json**:
   ```bash
   # Initialize the root package.json with workspaces
   npm init -y
   ```

3. **Configure workspaces in root package.json**:
   - Add `"workspaces": ["packages/*"]` to package.json
   - Set `"private": true` to prevent accidental publishing

4. **Initialize the first package**:
   ```bash
   cd packages/<package-folder>
   npm init -y
   ```

5. **Install TypeScript and core dependencies**:
   ```bash
   # Return to root directory
   cd ../..
   
   # Install TypeScript and type definitions
   npm install -D typescript @types/node
   
   # Install Vite for bundling
   npm install -D vite@latest
   
   # Install Vitest for testing
   npm install -D vitest@latest
   
   # Install ESLint and Prettier
   npm install -D eslint@latest prettier@latest eslint-config-prettier@latest
   npm install -D @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
   ```

6. **Create TypeScript configuration**:
   ```bash
   # Generate tsconfig.json
   npx tsc --init
   ```

7. **Set up ESLint and Prettier**:
   ```bash
   # Initialize ESLint
   npx eslint --init
   
   # Create Prettier config
   echo '{ "semi": true, "singleQuote": true, "tabWidth": 2, "trailingComma": "es5" }' > .prettierrc
   ```

8. **Create Vite configuration**:
   ```bash
   # Create vite.config.ts
   touch vite.config.ts
   ```

9. **Set up package scripts**:
   - Add build, test, lint scripts to package.json

10. **Create initial source files**:
    ```bash
    mkdir -p packages/<package-folder>/src
    touch packages/<package-folder>/src/index.ts
    ```

11. **Create test files**:
    ```bash
    mkdir -p packages/<package-folder>/tests
    touch packages/<package-folder>/tests/index.test.ts
    ```

## 📌 Remember

### Output Results

When you are done, output results to the user. 
Also write the results to the output file, if one was provided.
If an output file was provided, in one or two sentences, describe what you think the user's idea is based on the name and whether it will work.