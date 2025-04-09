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
   
   # Install ESLint 9 and Prettier
   npm install -D eslint@9 prettier@latest eslint-config-prettier@latest
   npm install -D @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
   npm install -D eslint-plugin-prettier@latest
   ```

6. **Create TypeScript configuration**:
   ```bash
   # Generate tsconfig.json
   npx tsc --init
   ```

7. **Set up ESLint and Prettier**:
   ```bash
   # Create ESLint config with Prettier integration using flat config
   echo 'import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      "prettier/prettier": ["error", {
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5"
      }]
    }
  },
  prettierConfig
);' > eslint.config.js
   ```

8. **Create Vite configuration**:
   ```bash
   # Create vite.config.ts
   touch vite.config.ts
   ```

9. **Set up package scripts**:
   ```bash
   # Update root package.json scripts
   cat > package.json << EOF
{
  "name": "your-project-name",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "lint": "npm run lint --workspaces",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\""
  }
}
EOF

   # Update package-specific package.json scripts
   cat > packages/<package-folder>/package.json << EOF
{
  "name": "your-package-name",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint src --ext .ts",
    "typecheck": "tsc --noEmit"
  }
}
EOF
   ```

   Note: Replace `your-project-name` and `your-package-name` with the actual names.

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

12. **Install all dependencies**:
    After setting up the project structure, install all dependencies with:
    ```bash
    npm install
    ```

## 🚀 Working with Your Project

Now that your project is set up, here are some common commands you'll use:

### Building the project
```bash
# Build all packages
npm run build

# Build a specific package
npm -w packages/<package-folder> run build
```

### Running tests
```bash
# Run tests for all packages
npm run test

# Run tests for a specific package
npm -w packages/<package-folder> run test

# Run tests in watch mode
npm -w packages/<package-folder> run test:watch
```

### Linting code
```bash
# Lint all packages
npm run lint

# Lint a specific package
npm -w packages/<package-folder> run lint
```

### Type checking
```bash
# Run type checking for a specific package
npm -w packages/<package-folder> run typecheck
```

### Formatting code
```bash
# Format all code
npm run format
```
