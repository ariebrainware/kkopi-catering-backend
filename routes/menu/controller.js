const models = require('../../models')
const Menu = models.menu

const controller = {
  show: (req, res) => {
    Menu.findAll()
      .then(menu =>{
        res.status(200).send(menu)
      }).catch(err => res.status(500).send(err))
  },
  create: (req, res) => {
    const { name, qty, price } = req.body
    if (name && qty && price) {
      Menu.findOne({where: {name, createdAt: new Date()}})
        .then(menu => {
          if (!menu) {
            Menu.create({
              name, qty, price, createdAt: new Date(),
            }).then(() => {
              res.status(200).send({
                message: 'Menu created',
              })
            })
          } else {
            res.status(400).send({
              message: 'Menu already registered',
            })
          }
        })
    }
  },
}

module.exports = controller
