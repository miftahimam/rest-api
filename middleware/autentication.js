const jwt = require('jsonwebtoken')

module.exports = {
    isLogin(){
        try {
            var decoded = jwt.verify(req.headers.token, process.env.SALT);
            req.authenticatedUser = decoded
            next()
          } catch(err) {
            // err
            res.status(400).json(err)
          }
    }
}