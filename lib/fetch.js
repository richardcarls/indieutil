/* global Promise */
import axios from 'axios'

/**
 * @module indieutil/fetch
 * @license MIT
 */

/**
 * @typedef {Object} FetchResponse
 * @property {Object} data - The raw response body
 * @property {Number} status - The response status code
 * @property {String} statusText - The response status text
 * @property {Object} headers - The response headers
 * @property {Object} config - The `axios` config used for the request
 * @property {Object} mf2 - The full parsed Microformats2 of the response
 */

const defaultOptions = {
  axios: {}
}

/**
 * fetch
 *
 * Returns structured data from the HTML of the specified URL.
 *
 * @param {String} url - The URL to retrieve and parse
 * @param {Object} [options] - The options object
 * @param {Object} [options.axios] - Options to pass to `axios`
 * @returns {Promise<Error,FetchResponse>} - Promise for the response object
 */
function fetch (url, options = defaultOptions) {
  // TODO: Validate url
  if (!url) {
    return Promise.reject(new TypeError('url is undefined'))
  }

  return axios.get(url, options.axios)
    .then(response => {
      return response
    })
}

export default fetch
