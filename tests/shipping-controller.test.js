// tests/shipping-controller.test.js
var sinon = require('sinon')
var ShippingController = require('../src/controllers/shipping-controller')
var productService = require('../src/services/product-service')

describe('Shipping controller', function () {
  var shippingCtrl = new ShippingController()

  beforeEach(function(){
    sinon.stub(productService, 'getProductWeight').callsFake(async function() {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve(5)
        }, 50)
      })
    })
  })

  afterEach(function () {
    productService.getProductWeight.restore()
  })

  it('Should calculate correct shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard' })
    expect(shipping).toBe(0.5)
  })

  it('Should calculate correct overnight shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'overnight' })
    expect(shipping).toBe(5)
  })

})