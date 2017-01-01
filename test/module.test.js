/* global describe it */
const indieutil = require('..')
const expect = require('chai').expect

const version = require('../package.json').version

describe('The indieutil module', () => {
  it('reports the current version', () => {
    expect(indieutil).to.have.property('version', version)
  })
})
