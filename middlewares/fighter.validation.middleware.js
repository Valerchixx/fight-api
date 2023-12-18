import { FIGHTER } from "../models/fighter.js";
import { fighterService } from "../services/fighterService.js";

const createFighterValid = (req, res, next) => {
  try {
    const {power, defense, health, name} = req.body
    const isFighterWithSameName = fighterService.isFighterWithName(name)
    const isPowerIsValid = fighterService.isPowerValid(power)
    const isDefenseIsValid = fighterService.isDefenseValid(defense)
    const isHealthIsValid = fighterService.isHealthValid(health)
    const keys = Object.keys(FIGHTER).filter(item => item !== 'id' && item !== 'health');
    const keysWithoutId = Object.keys(FIGHTER).filter(item => item !== 'id');
    const isRedundantKeys = fighterService.getRedundantKeys(keysWithoutId, Object.keys(req.body))
    const isFighterValid = keys.every(key => key in req.body) && keys.every(key => req.body[key])

    if(isFighterWithSameName) {
      throw new Error('fighter with same name already exist')
    }


    if(!isFighterValid  || !isPowerIsValid|| !isDefenseIsValid  || (health && !isHealthIsValid) || isRedundantKeys) {
      throw new Error('fighter data is not valid')
    }

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
};

const updateFighterValid = (req, res, next) => {
  try {
    const {power, defense, health, name} = req.body
    const isFighterWithSameName = fighterService.isFighterWithName(name)
    const isPowerIsValid = fighterService.isPowerValid(power)
    const isDefenseIsValid = fighterService.isDefenseValid(defense)
    const isHealthIsValid = fighterService.isHealthValid(health)
    const keys = Object.keys(FIGHTER).filter(item => item !== 'id')
    const isRedundantKeys = fighterService.getRedundantKeys(keys, Object.keys(req.body))
    const isDataValid = keys.some(key => key in req.body) &&  Object.values(req.body).every(value => value)

    if(isFighterWithSameName) {
      throw new Error('fighter with same name already exist')
    }


    if(!isDataValid || (power && !isPowerIsValid)|| (defense && !isDefenseIsValid) || (health && !isHealthIsValid)|| isRedundantKeys)  {
      throw new Error('Fighter update data is invalid')
    }

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
};

export { createFighterValid, updateFighterValid };
