const User = require('./auth-helpers')

const checkUsernameFree = async (req, res, next) => {
    try {
      const users = await User.findBy({username: req.body.username})
      if(!users.length){
        next()
      }
      else{
        next({status: 422, message: "Username taken"})
      }
    } 
    catch (error) {
      next(error)
    }
}

const validatePayload = (req, res, next) => {
    const { username, password } = req.body

    if(!username || !password){
        next({
            status: 401,
            message: "username and password required"
        })
    }
    else{
        next()
    }
}



module.exports = {
    checkUsernameFree,
    validatePayload,
}