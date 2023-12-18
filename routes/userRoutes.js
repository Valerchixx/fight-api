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
      if(res.err) {
        return next()
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
    res.data =  userService.delete(id)
  } catch(err) {
    res.err = err
  } finally {
    next()
  }
},responseMiddleware)

router.get('/:id', (req,res,next) => {
  try {
    const id = req.params.id
    const user = userService.getOne({id})
    res.data = user;
  } catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)


router.put('/:id',updateUserValid, (req,res,next) => {
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
