import { USER } from "../models/user.js";
import {userService} from '../services/userService.js'


const createUserValid = (req, res, next) => {
  try {
    const {phoneNumber, email, password} = req.body
    const keys = Object.keys(USER).filter(item => item !== 'id');
    const isUserValid = keys.every(key => key in req.body) && keys.every(key => req.body[key])
    const isRedundantKeys = userService.getRedundantKeys(keys, Object.keys(req.body))
    const isEmailIsValid = userService.isEmailValid(email)
    const isPhoneIsValid = userService.isPhoneValid(phoneNumber)
    const isPasswordIsValid = password && password.length >= 3
    const userWithSameEmail =userService.isUserWithSameEmail(email)
    const userWithSamePhone = userService.isUserWithSamePhone(phoneNumber)

    if(userWithSameEmail || userWithSamePhone) {
      throw new Error('User with same properties already exist')
    }

    if(!isUserValid || !isEmailIsValid || !isPasswordIsValid || !isPhoneIsValid || isRedundantKeys) {
      throw new Error('User data is not valid')
    }

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
};

const updateUserValid = (req, res, next) => {
  try {
    const {email, phoneNumber, password} = req.body;
    const isDataValid = Object.keys(req.body).some(key => key in req.body) && Object.values(req.body).every(value => value)
    const keys = Object.keys(USER).filter(item => item !== 'id');
    const isRedundantKeys = userService.getRedundantKeys(keys, Object.keys(req.body))
    const isEmailIsValid = userService.isEmailValid(email)
    const isPhoneIsValid = userService.isPhoneValid(phoneNumber)
    const isPasswordIsValid = password.length >= 3
    const userWithSameEmail =userService.isUserWithSameEmail(email)
    const userWithSamePhone = userService.isUserWithSamePhone(phoneNumber)

    if(userWithSameEmail || userWithSamePhone) {
     throw new Error('User with same properties already exist')
   }


   if(!isDataValid || (password && !isPasswordIsValid)
   || (email && !isEmailIsValid) || (phoneNumber && !isPhoneIsValid) || isRedundantKeys) {
     throw new Error('User data to update  is not valid')
   }

  } catch(err) {
    res.err = err
  }finally {
    next()
  }


};

export { createUserValid, updateUserValid };
