import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/",
  createUserValid,
  (req, res, next) => {
    try {
      const {email, phoneNumber, firstName, lastName} = req.body
      const allUsers = userService.getAll();
      const userWithSameEmail = !!allUsers.find((item) => item.email === email)
      const userWithSamePhone = !!allUsers.find(item => item.phoneNumber === phoneNumber)
      const userWithSameName = !!allUsers.find(item => item.firstName === firstName || item.lastName === lastName)

      if(userWithSameEmail || userWithSameName || userWithSamePhone) {
        throw new Error('User with same properties already exist')
      }

      const user = userService.createUser(req.body)
      res.data = user;
    } catch(err) {
      res.err = err
    }finally {
      next()
    }

},responseMiddleware);

router.get('/', (req,res, next) => {
  try {
    const users = userService.getAll()
    res.data = users;
  } catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)

router.delete('/:id', (req,res,next) => {
  try {
    const id = req.params.id
    userService.delete(id)
    res.data = 'success'
  } catch(err) {
    res.err = err
  } finally {
    next()
  }
},responseMiddleware)

router.get('/:id', (req,res,next) => {
  try {
    const user = userService.getOne(req.body)
    res.data = user;
  } catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)


router.put('/:id', (req,res,next) => {
  try {
    const id = req.params.id;
    const updatedUser = userService.update(id, req.body);
    res.data = updatedUser;

  } catch(err) {
    res.err = err
  }finally {
    next()
  }
}, responseMiddleware)

export { router };
