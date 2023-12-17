import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  try {
    const keys = Object.keys(FIGHTER).filter(item => item !== 'id' && item !== 'health');
    const isFighterValid = keys.every(key => key in req.body)
    if(!isFighterValid || req.body.defense > 10) {
      throw new Error('fighter data is not valid')
    }

  }catch(err) {
    res.err = err
  }finally {
    next()
  }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
