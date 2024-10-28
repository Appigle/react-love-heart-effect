# Readme

## Demo

![Effect](https://www.unpkg.com/react-love-heart-effect/dist/ReactLoveHeartEffect.gif)

## Getting Started

### Prerequisite

dependencies:

```json
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
```

### Install

```bash
    npm i react-love-heart-effect
```

### Usage

\*.d.ts

```ts
/**
 * LoveHeartEffectProps defines the properties interface for a heart effect component.
 */
export interface LoveHeartEffectProps {
  // height sets the height of the heart effect component in pixels. This is an optional property.
  height?: number;
  // width sets the width of the heart effect component in pixels. This is an optional property.
  width?: number;
  // heartBeat indicates whether to enable the heartbeat animation effect. Default is disabled. This is an optional property.
  heartBeat?: boolean;
  // heartBeatTimeInterval sets the interval time for the heartbeat animation in milliseconds. This is an optional property.
  heartBeatTimeInterval?: number;
  // liked indicates whether the user has liked, used to control the initial state of the heart effect. This is an optional property.
  liked?: boolean;
  // containerStyle sets custom styles for the component container. This is an optional property.
  containerStyle?: React.CSSProperties;
  // containerCls sets custom class names for the component container. This is an optional property.
  containerCls?: string;
  /**
   * onChange is a callback function that is called when the like status changes.
   * It receives two parameters: the updated like status and the original input element event object.
   * This is an optional property.
   */
  onChange?: (liked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

```react
import ReactLoveHeartEffect from 'react-love-heart-effect';
import 'react-love-heart-effect/styles'; // import style

function App() {
  const handleLikeChange = (like: boolean) => {
    console.log(
      '%c [ like ]-6',
      'font-size:13px; background:pink; color:#bf2c9f;',
      like
    );
  };
  return (
    <ReactLoveHeartEffect
      liked={true}
      height={140}
      width={150}
      heartBeat
      heartBeatTimeInterval={3000}
      onChange={handleLikeChange}
    />
  );
}

export default App;

```

## Caveat

1. The `ReactLoveHeartEffect` component is a uncontrolled component. The `onChange` prop is used to notify you when the user interacts with the heart.

## Develop Note

- [Publish your React library to npm using vite](https://medium.com/@kaljessy/publish-your-react-library-to-npm-using-vite-136dc81e368d)
- [Vite library mode config](https://vite.dev/guide/build.html#library-mode)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
