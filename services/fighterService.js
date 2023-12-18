import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  getAll() {
    const fighters = fighterRepository.getAll()
    if(!fighters) {
      return null
    }
    return fighters;
  }
  create(fighterData) {
    const fighter = fighterRepository.create(fighterData)
    if(!fighter['health']) {
      fighter.health = 100
    }
    if(!fighter) {
      return null
    }
    return fighter
  }

  getOne(fighterData) {
    const fighter = fighterRepository.getOne(fighterData)
    if(!fighter) {
      return null
    }
    return fighter
  }

  delete(id) {
    const fighter = this.getOne({id})
    if(!!fighter) {
      return fighterRepository.delete(id)
    }
    return null
  }

  update(id, dataToUpdate) {
    const updatedFighter = fighterRepository.update(id,dataToUpdate)
    if(!updatedFighter) {
      return null
    }
    return updatedFighter
  }

  isFighterWithName(name) {
    const allFighters = this.getAll()
    return !!allFighters.find(item => item.name === name)
  }

  isPowerValid = (power) => {
    return power >= 1 && power <= 100
  }

  isDefenseValid = (defense) => {
    return defense >= 1 && defense <= 10
  }

 isHealthValid = (health) => {
    return health >= 80 && health <= 120
  }

  getRedundantKeys = (keys, fighterKeys) => {
    const redundantKeys = fighterKeys.filter(item => !keys.includes(item))
    return redundantKeys.length > 0
  }
}

const fighterService = new FighterService();

export { fighterService };
