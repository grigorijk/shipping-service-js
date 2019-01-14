/**
 * @jest-environment node
 */
var productService = require('../src/services/product-service')
var nock = require('nock')

describe('Product service', function () {
  it('Should call remote service', async function () {
    nock('https://mycluster.icp:8899/products')
      .get('/13')
      .delayBody(10)
      .reply(200, {
        weightLB: 15.5,
        unit: 'lbs'
      })

    let weight = await productService.getProductWeight('13')
    expect(weight).toBe(15.5)
  })

  it('Should handle unexpected response structure', async function () {
    nock('https://mycluster.icp:8899/products')
      .get('/19')
      .reply(200, {
        res: 15.5
      })

    await productService
      .getProductWeight('19')
      .then(() => {
        throw(new Error('Should not resolve in case of malformed data'))
      })
      .catch(err => {
        expect(err.message).toBe('Invalid response object')
      })
  })
})