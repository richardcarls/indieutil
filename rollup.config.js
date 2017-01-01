import { readFileSync } from 'fs'

import buble from 'rollup-plugin-buble'
import globals from 'rollup-plugin-node-globals'
import node from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

// TODO: Why not just use require() here? Preference?
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default {
  entry: 'lib/index.js',
  plugins: [
    json(),
    buble(),
    globals(),
    node({
      browser: true
    })
  ],
  external: Object.keys(pkg.dependencies),
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: pkg.name,
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
}
