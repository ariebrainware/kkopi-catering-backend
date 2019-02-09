const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const model = require('../../models')
const Admin = model.admin

const controller = {
  show: (req, res) => {
    Admin
      .findAll({ attributes: ['fullname', 'email', 'phone_number']})
      .then(admin => res.status(200).send(admin))
      .catch(err => res.status(500).send(err))
  },
  login: (req, res) => {
    const { username, password } = req.body
    if (username && password) {
      Admin
        .findOne({ where: { username }})
        .then(admin => {
          if (admin){
            bcrypt
              .compare(password, admin.password_hash)
              .then(response => {
                if (response) {
                  const token = jwt.sign({
                    username,
                    role: 'admin',
                  }, process.env.SECRETKEY, { expiresIn: '12h' })
                  res.status(200).send({ message: 'Login success', token })
                }
              })
          } else res.status(404).send({ message: 'Make sure your account has been registered before'})
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please fill username and password field' })
  },
}

module.exports = controller
