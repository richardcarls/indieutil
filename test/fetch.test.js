/* global describe it before */

const fetch = require('..').fetch
const expect = require('chai').expect
const nock = require('nock')

const mockUrl = 'https://example.com'

describe('indieutil/fetch', () => {
  it('should have two parameters', () => {
    expect(fetch.length).to.equal(2)
  })

  it('should throw without the url parameter', done => {
    fetch(null)
      .catch(err => {
        expect(err).to.be.an.instanceof(TypeError)
        done()
      })
  })

  describe('fetching a URL', () => {
    let result
    let error

    before('mock the target URL', () => {
      nock(mockUrl)
        .get('/notes/null')
        .reply(200)
    })

    before('fetch the URL', done => {
      fetch(`${mockUrl}/notes/null`)
        .then(response => {
          result = response
          done()
        })
        .catch(err => {
          error = err
          done()
        })
    })

    it('should not throw', () => {
      expect(error).to.be.undefined
    })

    it('should return an axios response object', () => {
      expect(result).to.be.an('object')
      expect(result).to.have.property('data')
      expect(result).to.have.property('status')
      expect(result).to.have.property('statusText')
      expect(result).to.have.property('headers')
      expect(result).to.have.property('config')
    })
  })

  describe('getting an error status', () => {
    let result
    let error

    before('mock the target URL', () => {
      nock(mockUrl)
        .get('/notes/404')
        .reply(404)
    })

    before('fetch the URL', done => {
      fetch(`${mockUrl}/notes/404`)
        .then(response => {
          result = response
          done()
        })
        .catch(err => {
          error = err
          done()
        })
    })

    it('should throw', () => {
      expect(result).to.be.undefined
      expect(error).to.be.an('error')
    })
  })
})
