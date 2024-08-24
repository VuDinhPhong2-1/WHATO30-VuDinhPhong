# React + TypeScript + Vite Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository: `git@github.com:VuDinhPhong2-1/WHATO30-VuDinhPhong-.git`
2. Navigate to the project directory: `cd DEMO`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install `eslint-plugin-react` and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.

### `npm run test:ci` or `yarn test:ci`

Runs the test runner in the non-interactive mode.

### `npm run test:coverage` or `yarn test:coverage`

Runs the test runner with coverage.

### `npm run lint` or `yarn lint`

Lints the code.

### `npm run lint:fix` or `yarn lint:fix`

Lints and fixes the code.

## Learn More

To learn more about Vite, check out the [official Vite documentation](https://vitejs.dev/).

To learn more about React, check out the [official React documentation](https://reactjs.org/).

To learn more about TypeScript, check out the [official TypeScript documentation](https://www.typescriptlang.org/docs/).
