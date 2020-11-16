export const baseBreakpoints = {
  /** Above 1192 */
  xl: '1192px',
  /** Between 1024 and  1191 */
  lg: '1024px',
  /** Between 900 and 1023 */
  md: '900px',
  /** Between 768 and  899 */
  sm: '768px',
  /** Below 767 */
  xs: '767px',
}

export const BREAKPOINTS = baseBreakpoints

const BREAKPOINTS_SCALE = Object.assign(
  [baseBreakpoints.sm, baseBreakpoints.md, baseBreakpoints.lg, baseBreakpoints.xl],
  baseBreakpoints,
)

const baseFontSizes = {
  tiny: '10px',
  caption: '14px',
  small: '16px',
  body: '18px',
  lead: '24px',
  h5: '21px',
  h4: '26px',
  h3: '31px',
  h2: '37px',
  h1: '45px',
  hero: '77px',
}

export const FONT_SIZES = baseFontSizes

const FONT_SIZES_SCALE = Object.assign(
  [
    baseFontSizes.tiny,
    baseFontSizes.caption,
    baseFontSizes.small,
    baseFontSizes.body,
    baseFontSizes.lead,
    baseFontSizes.h5,
    baseFontSizes.h4,
    baseFontSizes.h3,
    baseFontSizes.h2,
    baseFontSizes.h1,
    baseFontSizes.hero,
  ],
  baseFontSizes,
)

export const baseTheme = {
  colors: {
    primary: '#2672FF',
    background: '#FFFFFF',
    font: '#101010',
    white: '#FFFFFF',
    grays: ['#F9F9F9', '#ECECEC', '#B9B9B9', '#717171', '#2F2F2F'],
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  shadows: ['0px 4px 8px 0px #00000005'],

  borders: ['1px solid', '2px solid'],

  breakpoints: BREAKPOINTS_SCALE,

  fonts: {
    primary: '"Open Sans", sans-serif',
  },
  fontSizes: FONT_SIZES_SCALE,
}
