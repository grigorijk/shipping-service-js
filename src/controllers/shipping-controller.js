var productService = require('../services/product-service')
function ShippingController() {}

const REGULAR_PRICE = 0.1, OVERNIGHT_PRICE = 1

ShippingController.prototype.getItemShipping = async function (item) {
  var shippingAmount = await productService.getProductWeight(item.id)
  if (item.type.toLowerCase() === 'overnight') {
    return shippingAmount * OVERNIGHT_PRICE
  } else {
    return shippingAmount * REGULAR_PRICE
  }
}

module.exports = ShippingController;
