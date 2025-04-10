# Ideal Project Structure 🏆

## 🚦 Parking Lot

NPM Scripts

| Script | Top-level | Sub-packages | Root-level |
| `build` | `npm run build --workspaces` | `vite build && tsc --emitDeclarationOnly` | N/A |
| `clean` | `npm run clean --workspaces && npm run clean:root` | `rimfaf dist` | `clean:root` |
| `format` | `eslint --fix .` | `eslint --fix .` | N/A |
| `lint` | `eslint .` | `eslint .` | N/A |
| `test` | `vitest run` | `vitest run` | N/A |
| `test:watch` | `vitest watch` | `vitest watch` | N/A |
| `test:<package>:watch` | `npm run test:watch --workspace packages/<package>` |  | N/A |
| `typecheck` | `npm run typecheck --workspaces` |  | N/A |

NPM Dev Dependencies

* eslint - root
* vitest - root