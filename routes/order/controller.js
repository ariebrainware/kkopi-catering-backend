const models = require('../../models')
const Order = models.order

const controller = {
  show: (req, res) => {
    Order.findAll()
      .then(order =>{
        res.status(200).send(order)
      })
  },
}

module.exports = controller
