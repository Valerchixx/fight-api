import { USER } from "../models/user.js";

const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

const isPhoneValid = (phone) => {
  return phone.startsWith("+380") && phone.length == 13
}

const createUserValid = (req, res, next) => {
  try {
    const keys = Object.keys(USER);
    keys.shift()
    const isUserValid = keys.every(key => key in req.body)
    const {email, phoneNumber, password} = req.body

    if(!isUserValid || password.length < 3 ) {
      throw new Error('invalid data')
      // res.status(400).json({error:true, message: "User entity to create isn’t valid"})
    }

  } catch(err) {
    next(err)
  }finally {
    next()
  }


};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const isDataValid = Object.keys(req.body).some(key => key in req.body)
  const {email, phoneNumber} = req.body
  if(!isDataValid) {
    res.status(400).json({error:true, message: "User entity to update isn’t valid"})
  }
  next();
};

export { createUserValid, updateUserValid };
