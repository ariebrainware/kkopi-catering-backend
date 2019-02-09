const models = require('../../models')
const Order = models.order

const controller = {
  show: (req, res) => {
    Order
      .findAll()
      .then(order => res.status(200).send(order))
  },
  create: (req, res) => {
    const { menu, date, buyer, totalPrice, status, note, metadata } = req.body
    if (menu && date && buyer && totalPrice) {
      Order
        .create({
          menu, date, buyer, total_price: totalPrice,
          status, note, createdAt: new Date()+7, updatedAt: new Date()+7, metadata,
        })
        .then(order => res.status(200).send({ message: 'Order created!', order }))
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Make sure menu, date, buyer, and totalPrice field not empty!' })
  },
  update: (req, res) => {
    const { id } = req.params
    const { menu, date, buyer, totalPrice, status, note, metadata } = req.body
    if (Number(id)) {
      Order
        .findAll({ where: { id }})
        .then((order) => {
          if (order){
            if (menu && date && buyer && totalPrice) {
              Order
                .update({
                  menu, date, buyer, total_price: totalPrice, status, note,
                  updatedAt: new Date()+7, metadata,
                }, { where: { id } })
                .then(order => res.status(200).send({ message: 'Order updated!', order }))
                .catch(err => res.status(500).send(err))
            } else res.status(400).send({ message: 'Make sure menu, date, buyer, and totalPrice field not empty!' })
          } else res.status(404).send({ message: 'Order didn\'t exist' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please specify order id that you want to update' })
  },
  delete: (req, res) => {
    const { id } = req.params
    if (Number(id)) {
      Order
        .findAll({ where: { id }})
        .then((order) => {
          if (order){
            Order
              .destroy({ where: { id } })
              .then(() => res.status(200).send({ message: 'Order deleted!!' }))
              .catch(err => res.status(500).send(err))
          } else res.status(404).send({ message: 'Order didn\'t exist' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please specify order id that you want to delete' })
  },
}

module.exports = controller
