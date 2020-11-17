export const BREAKPOINTS = {
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

export const BREAKPOINTS_SCALE = Object.assign(
  [BREAKPOINTS.sm, BREAKPOINTS.md, BREAKPOINTS.lg, BREAKPOINTS.xl],
  BREAKPOINTS,
)
