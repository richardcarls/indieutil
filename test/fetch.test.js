/* global describe it */

const fetch = require('..').fetch
const expect = require('chai').expect
const nock = require('nock')

describe('indieutil/fetch', () => {
  it('should have two parameters', () => {
    expect(fetch.length).to.equal(2)
  })
  it('should throw without the url parameter', (done) => {
    fetch(null)
      .catch(err => {
        expect(err).to.be.an.instanceof(TypeError)
        done()
      })
  })
})
