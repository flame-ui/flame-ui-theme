# flame-ui theme

flame-ui theme package

## Install

```bash
yarn add @flame-ui/theme

// or using mpm

npm i @flame-ui/theme
```

## Usage

```js
import { createTheme } from '@flame-ui/theme'

const { theme } = createTheme({
  colors: {
    primary: '#1440FF',
    background: '#FFFFFF',
  },
  fonts: {
    primary: '"OpenSans", sans-serif',
    heading: '"Roboto", sans-serif',
  },
})
```

## Theme Object

| Key           | Type               | Example                                     |
| ------------- | ------------------ | ------------------------------------------- |
| `colors`      | {[string]: string} | { lightgray: '#EAEAEA' }                    |
| `space`       | number[]           | [0, 4, 8, 16, 24, 32, 40]                   |
| `shadows`     | string[]           | ['0px 4px 8px 0px #00000005']               |
| `fonts`       | {[string]: string} | { primary: '"OpenSans", sans-serif' }       |
| `fontsSizes`  | {[string]: string} | { small: '16px', body: '18px' }             |
| `borders`     | string[]           | ['1px solid', '2px solid']                  |
| `breakpoints` | {[string]: string} | { xl: '1192px', lg: '1024px', sm: '768px' } |
