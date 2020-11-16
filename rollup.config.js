import { version } from './package.json'

import typescript from 'rollup-plugin-typescript2'

const name = 'flame-ui theme'
const banner = `/* ${name} version: ${version} */`

const standardOpts = {
  name,
  banner,
  exports: 'named',
  minifyInternalExports: true,
  preserveModules: true,
}

const config = [
  {
    input: './src/index.ts',
    strictDeprecations: true,
    output: [
      { ...standardOpts, dir: 'lib', format: 'cjs' },
      { ...standardOpts, dir: 'lib/esm', format: 'esm' },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        tsconfigOverride: {
          exclude: ['test'],
        },
      }),
    ],
  },
]

export default config
