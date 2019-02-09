const jwt = require('jsonwebtoken')

const controller = {
  verifyToken: async(req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
    if (token) {
      const decodeToken = req.headers.authorization.split(' ')[1]
      jwt
        .verify(decodeToken, process.env.SECRETKEY, (error, decoded) => {
          if (!error){
            req.decoded = decoded
            next()
          } else res.status(400).send({ message: 'Token is invalid!' })
        })
        .catch(err => res.status(500).send(err))
    } else res.status(400).send({ message: 'Please specify token in request header'})
  },
}

module.exports = controller
