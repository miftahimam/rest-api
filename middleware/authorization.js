module.exports = {
    authorization = function(req,res,next){
        if(authorizedUser !== 'admin'){
            res.status(200).json(authorizedUser)
            next()
        } else {
            res.status('not authorized')
        }
    }
}