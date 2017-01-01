import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import istanbul from 'rollup-plugin-istanbul'

import { name, main, module, dependencies } from './package.json'

export default {
  entry: 'lib/index.js',
  plugins: [
    babel(babelrc()),
    istanbul({
      exclude: [
        'test/**/*',
        'node_modules/**/*'
      ]
    })
  ],
  external: Object.keys(dependencies),
  targets: [
    {
      dest: main,
      format: 'umd',
      moduleName: name,
      sourceMap: true
    },
    {
      dest: module,
      format: 'es',
      sourceMap: true
    }
  ]
}
