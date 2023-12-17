import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.post('/', createFighterValid,(req,res,next) => {
  try {
    if(res.err) {
      return next()
    }
    const fighters = fighterService.getAll()
    const fighterWithSameName = fighters.find(item => item.name === req.body.name)

    if(!!fighterWithSameName) {
      throw new Error('Fighter with same properties already exist')
    }
    const fighter = fighterService.create(req.body)
    res.data = fighter

  } catch (err) {
    res.err = err
  }finally {
    next()
  }

},responseMiddleware)

export { router };
