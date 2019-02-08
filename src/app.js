// src/app.js
const express = require('express')
const app = express()
const ShippingController = require('../src/controllers/shipping-controller')

app.get('/*shipping', (request, response) => {
  let ctrl = new ShippingController()

  ctrl
    .getItemShipping({id: request.query.itemId, type: request.query.type})
    .then(amount => {
      response.send({ itemId: request.query.itemId, priceUSD: amount })
    })
    .catch(error => {
      response.status(500).send({ error: error.message })
    })

})

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`ShippingService is listening on port ${PORT}`))
