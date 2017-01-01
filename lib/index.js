// Polyfill global Promise object
require('yaku/lib/global')

import { version } from '../package.json'

import fetch from './fetch'

/**
 * @module indieutil
 * @license MIT
 */
export default {
  fetch,
  version
}
