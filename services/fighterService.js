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
}

const fighterService = new FighterService();

export { fighterService };
