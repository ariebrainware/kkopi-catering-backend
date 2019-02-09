const models = require('../../models')
const Menu = models.menu

const controller = {
  show: (req, res) => {
    Menu
      .findAll()
      .then(menu => res.status(200).send(menu))
      .catch(err => res.status(500).send(err))
  },
  create: (req, res) => {
    const { name, qty, price } = req.body
    if (name && qty && price) {
      Menu.findOne({ where: { name } })
        .then((menu) => {
          if (!menu) {
            Menu
              .create({ name, qty, price, createdAt: new Date() })
              .then(() => res.status(200).send({ message: 'Menu created' }))
              .catch(err => res.status(500).send(err))
          } else res.status(400).send({ message: 'Menu already registered' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Make sure name, qty, and price field not empty!' })
  },
  update: (req, res) => {
    const { id } = req.params
    const { name, qty, price } = req.body
    if (Number(id)){
      Menu
        .findAll({ where: { id }})
        .then((menu) => {
          if (menu){
            if (name && qty && price) {
              Menu
                .update({ name, qty, price, updatedAt: new Date()+7 }, { where: { id } })
                .then((menu) => res.status(200).send({ message: 'Menu updated', menu }))
                .catch(err => res.status(500).send(err))
            } else res.status(400).send({ message: 'Make sure name, qty, and price field not empty!' })
          } else res.status(404).send({ message: 'Menu didn\'t exist' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please specify menu id that you want to update' })
  },
  delete: (req, res) => {
    const { id } = req.params
    if (Number(id)) {
      Menu
        .find({ where: { id }})
        .then((menu) => {
          if (menu) {
            Menu
              .destroy({ where: { id }})
              .then(() => res.status(200).send({ message: 'Menu deleted' }))
              .catch(err => res.status(500).send(err))
          } else res.status(404).send({ message: 'Menu didn\'t exist' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please specify menu id that you want to delete' })
  },
}

module.exports = controller
