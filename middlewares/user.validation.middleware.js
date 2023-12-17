import { USER } from "../models/user.js";

const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

const isPhoneValid = (phone) => {
  return phone.startsWith("+380") && phone.length == 13
}

const createUserValid = (req, res, next) => {
  try {
    const keys = Object.keys(USER).filter(item => item !== 'id');
    delete keys['id']
    const isUserValid = keys.every(key => key in req.body)
    if(!isUserValid || req.body.password.length < 3) {
      throw new Error('User data is not valid')
    }

  }catch(err) {
    res.err = err
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
