import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.post('/', createFighterValid,(req,res,next) => {
  try {
    if(res.err) {
      return next()
    }
    const fighter = fighterService.create(req.body)
    res.data = fighter

  } catch (err) {
    res.err = err
  }finally {
    next()
  }

},responseMiddleware)

router.get('/', (req, res,next) => {
  try {
    const fighters = fighterService.getAll()
    res.data = fighters;

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)


router.get('/:id', (req,res,next) => {
  try {
    const id = req.params.id
    const fighter = fighterService.getOne({id})
    res.data = fighter
  }catch(err) {
    res.err = err
  } finally {
    next()
  }
},responseMiddleware)

router.delete('/:id', (req,res, next) => {
  try {
    const id = req.params.id
    res.data = fighterService.delete(id)
  }catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)

router.put('/:id',updateFighterValid,(req,res,next) => {
  try {
    if(res.err) {
      return next()
    }
    const id = req.params.id
    const updatedFighter = fighterService.update(id, req.body)
    res.data = updatedFighter

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
},responseMiddleware)
export { router };
