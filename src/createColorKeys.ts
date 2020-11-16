export const createColorKeys = (colors: { [key: string]: string | string[] }): string[] => {
  const keys: string[] = []
  Object.keys(colors).map((el) => {
    const _swatch = colors[el]
    if (typeof _swatch === 'string') {
      keys.push(el)
    } else {
      _swatch.forEach((_, idx) => keys.push(`${el}.${idx}`))
    }
  })
  return keys
}
