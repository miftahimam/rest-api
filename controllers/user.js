const { User } = require('../models')

class userController {
    static add(req,res){
        User
          .create(req.body)
          .then(newUser =>{
              res.status(201).json(newUser)
          })
          .catch(err =>{
              res.status(500).json(err)
          })
    }

    static delete(req,res){ 
        const { params } = req
        User
          .destroy({
              where : {
                  id : params.id
              }
            })
          .then(users =>{
              res.status(200).json(users)
          })
          .catch(err =>{
            res.status(500).json(err)
          })

    }
    static list(req,res){
        User
           .findAll()
           .then(users =>{
               if(users.length > 0){
                   res.status(204).json(users)
               } else {
                   res.status(500).json(users)
               }
           })
           .catch(err =>{
               res.status(500).json(err)
           })

    }

    static update(req, res){
        const { params } = req
        User
          .findByPk(params.id)
          .then(foundUser =>{
              return foundUser.update(req.body)
          })
          .then(updatedUser =>{
            res.status(200).json(updatedUser)
          })
          .catch(err =>{
              res.status(500).json(err)
          })

    }
    static read(req, res){
        const { params } = req
       User
         .findByPk(params.id)
         .then(user =>{
             res.status(200).json(user)
         })
         .catch(err =>{
            res.status(500).json(err)
         })
         
    }

    static signup(req,res){
      User
        .create(req.body)
        .then(newUser =>{
            res.status(200).json(newUser)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
    static signin(req,res){
      User
        .findOne({
            where : {
                username : req.body.username
            }
        })
        .then(foundUser =>{
            if(foundUser !== null){
                var secure = bcrypt.compareSync(req.body.password, foundUser.password)
                if(secure){
                    res.status(200)
                } else {
                    res.status(500)
                }
    
            } else {
                res.status(401)
            }
            res.status(200).json({message : 'berhasil'})
        })  

    }
}

module.exports = userController