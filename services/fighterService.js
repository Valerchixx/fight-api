import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAll() {
    const fighters = fighterRepository.getAll()
    if(!fighters) {
      return null
    }
    return fighters;
  }
  create(fighterData) {
    const fighter = fighterRepository.create(fighterData)
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
    return fighterRepository.delete(id)
  }

  update(id, dataToUpdate) {
    const updatedFighter = fighterRepository.update(id,dataToUpdate)
    if(!updatedFighter) {
      return null
    }
    return updatedFighter
  }
}

const fighterService = new FighterService();

export { fighterService };
