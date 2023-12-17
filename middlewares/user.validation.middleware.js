import { USER } from "../models/user.js";


const createUserValid = (req, res, next) => {
    const keys = Object.keys(USER);
    keys.shift()
    const isUserValid = keys.every(key => key in req.body)
    if(!isUserValid || req.body.password.length < 3) {
      res.status(400).json({error:true, message: "User entity to create isn’t valid"})
    }
    next()

};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };
