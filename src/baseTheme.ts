import { FONTS, FONT_SIZES, TEXT_LINE_HEIGHTS, TEXT_LETTER_SPACING } from './tokens/typography'
import { BREAKPOINTS_SCALE } from './tokens/breakpoints'
import { COLORS } from './tokens/colors'

export const baseTheme = {
  colors: COLORS,

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  shadows: ['0px 4px 8px 0px #00000005'],

  borders: ['1px solid', '2px solid'],

  breakpoints: BREAKPOINTS_SCALE,

  fonts: FONTS,
  fontSizes: FONT_SIZES,

  lineHeights: TEXT_LINE_HEIGHTS,
  letterSpacings: TEXT_LETTER_SPACING,
}
