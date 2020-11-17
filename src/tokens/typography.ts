export const FONTS = {
  primary: '"Open Sans", sans-serif',
}

export const baseFontSizes = {
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

export const FONT_SIZES_SCALE = Object.assign(
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

export const TEXT_LINE_HEIGHTS = {
  solid: 1,
  title: 1.25,
  body: 1.5,
}

export const TEXT_LETTER_SPACING = {
  tight: '-0.02em',
  tightest: '-0.03em',
}
