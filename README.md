# Vite + Scalux

This template provides a minimal setup to get React working in **Vite** with **Scalux**.

## 🚀 Quick start

> **Prerequisites**: Node ≥ 18 and a package manager (npm 8+, **pnpm** or Yarn).

**Option A – Create a new project using degit (recommended)**

```bash
npx degit scalux/scalux-vite-template my-app
cd my-app
npm install # or use pnpm / yarn
npm run dev # http://localhost:5173
```

**Option B – Clone the repository (with Git history)**

```bash
git clone https://github.com/scalux/scalux-vite-template.git my-app
cd my-app
rm -rf .git # (optional) start with a clean Git history
npm install
npm run dev
```

---

## ✨ Features

- **Vite 5** – instant dev server, lightning‑fast HMR, ready for modern browsers.
- **React 18** with the `@vitejs/plugin-react` preset (SWC under the hood).
- **TypeScript 5** – strict by default, paths resolved via `vite-tsconfig-paths`.
- **Scalux ¹** – state slices, finite‑state machines, and time‑travel debugger already wired.
- Opinionated project structure that follows the **Reference Architecture** in the Scalux docs.
- Zero‑config testing with **Vitest** (optional, just uncomment the sample test).
- Pre‑configured **ESLint** & **Prettier** (extensible – see _Configuration_ below).

> ¹ Scalux is published on npm: [`scalux`](https://www.npmjs.com/package/scalux).

---

### Common scripts

| Script            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Launches Vite in development mode       |
| `npm run build`   | Generates an optimized production build |
| `npm run preview` | Serves the build locally for inspection |
| `npm run test`    | Runs unit tests with Vitest (optional)  |

---

## 🔧 Configuration tips

| Need                              | Where                                                  |
| --------------------------------- | ------------------------------------------------------ |
| Change dev port / proxy API       | `vite.config.ts`                                       |
| Add PostCSS / Tailwind            | Install the plugin → update `vite.config.ts`           |
| Enable Redux DevTools time‑travel | Already active – open browser devtools → _Scalux_ tab  |
| Path aliases (`@app`, `@libs`)    | `tsconfig.json` + `vite-tsconfig-paths` plugin         |
| Testing (Vitest)                  | Configure in `vitest.config.ts` (sample file included) |

---

## 📚 Learn more

- Scalux documentation – <https://scalux.github.io/scalux-docs>
- Vite guide – <https://vitejs.dev/guide/>
- React docs – <https://react.dev>

---

## 🪪 License

This template is distributed under the **MIT license**. See [LICENSE](./LICENSE) for details.

---

### Contributing

Found a bug or have an idea? Feel free to open an issue or PR on GitHub – all feedback is welcome!

# Vite + Scalux

This template provides a minimal setup to get React working in **Vite** with **Scalux**.

---

## ✨ Features

- **Vite 5** – instant dev server, lightning‑fast HMR, ready for modern browsers.
- **React 18** with the `@vitejs/plugin-react` preset (SWC under the hood).
- **TypeScript 5** – strict by default, paths resolved via `vite-tsconfig-paths`.
- **Scalux ¹** – state slices, finite‑state machines, and time‑travel debugger already wired.
- Opinionated project structure that follows the **Reference Architecture** in the Scalux docs.
- Zero‑config testing with **Vitest** (optional, just uncomment the sample test).
- Pre‑configured **ESLint** & **Prettier** (extensible – see _Configuration_ below).

> ¹ Scalux is published on npm: [`scalux`](https://www.npmjs.com/package/scalux).

---
