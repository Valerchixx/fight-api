import { USER } from "../models/user.js";


const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const keys = Object.keys(USER);
  keys.shift()
  const isUserValid = keys.every(key => key in req.body)
  if(isUserValid && req.body.password.length >= 3) {
    next();
  } else {
    res.sendStatus(400)
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };
