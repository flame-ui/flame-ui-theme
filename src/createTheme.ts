import { baseTheme } from './baseTheme'
import { createColorKeys } from './createColorKeys'

type Intersect<T> = (T extends any ? (x: T) => 0 : never) extends (x: infer R) => 0 ? R : never

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createTheme = <T = {}, U = {}>(theme?: T, modes?: { [key: string]: U }) => {
  const _theme = ((theme ? theme : baseTheme) as unknown) as any
  const _modes = ((modes ? modes : {}) as unknown) as { [key: string]: any }

  const { colors, ...t } = _theme
  const _colors = Object.assign(baseTheme.colors, colors)
  const buildTheme = (Object.assign(baseTheme, {
    colors: _colors,
    ...t,
  }) as unknown) as Intersect<T & U & typeof baseTheme>

  return {
    theme: buildTheme,
    themeModes: modes,
    themeModesKeys: modes ? Object.keys(modes) : null,
    colorKeys: createColorKeys(
      modes
        ? Object.assign(_colors, ...Object.keys(modes).map((el) => _modes[el].colors))
        : _colors,
    ),
  }
}
