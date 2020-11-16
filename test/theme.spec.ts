import { createTheme } from '../src/createTheme'
import { baseTheme } from '../src/baseTheme'

const colors = {
  primary: '#4C32FF',
  green: '#4C32FF',
}

const lightColors = {
  background: '#FFFFFF',
  font: '#101010',
  gray: '#C7C7C7',
  backgrounds: ['#F9F9F9', '#ECECEC', '#B9B9B9', '#717171', '#2F2F2F'],
}

const darkColors = {
  background: '#101010',
  font: '#FFFFFF',
  gray: '#F9F9F9',
  backgrounds: ['#181818', '#262626', '#424242', '#6B6B6B', '#E7E7E7'],
}

const modes = {
  light: {
    colors: lightColors,
  },
  dark: {
    colors: darkColors,
  },
}

const fonts = {
  primary: '"Open Sans", sans-serif',
  heading: '"Roboto", sans-serif',
}

describe('theme', () => {
  it('create default theme', () => {
    const { theme } = createTheme()
    const expectedTheme = baseTheme
    expect(theme).toEqual(expectedTheme)
  })
  it('create theme', () => {
    const { theme, themeModes, themeModesKeys } = createTheme(
      {
        colors,
        fonts,
      },
      modes,
    )
    const expectedTheme = {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        ...colors,
      },
      fonts,
    }
    const expectedModes = modes
    expect(theme).toEqual(expectedTheme)
    expect(themeModes).toEqual(expectedModes)
    expect(themeModesKeys).toEqual(['light', 'dark'])
  })
})
