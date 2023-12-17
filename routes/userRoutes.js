import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.post(
  "/",
  createUserValid,
  (req, res, next) => {
      const userData = req.body
      const user = userService.createUser(userData)
      res.data = user;
      next()

},responseMiddleware);


export { router };
