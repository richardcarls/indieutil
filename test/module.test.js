/* global describe it */

const indieutil = require('..')
const expect = require('chai').expect

const version = require('../package.json').version

describe('The indieutil module', () => {
  it('exports the fetch module', () => {
    expect(indieutil).to.have.property('fetch')
  })
  it('reports the current version', () => {
    expect(indieutil).to.have.property('version', version)
  })
})
