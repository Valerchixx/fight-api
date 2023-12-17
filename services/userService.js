import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  update(id, dataToUpdate) {
    const updatedUser = userRepository.update(id, dataToUpdate);
    if(!updatedUser) {
      return null;
    }
    return updatedUser
  }

  getOne(userData) {
    const user = userRepository.getOne(userData)
    if(!user) {
      return null
    }
    return user;
  }
  delete(id) {
    return userRepository.delete(id)
  }
  getAll() {
    const users = userRepository.getAll()
    if(!users) {
      return null
    }
    return users;
  }
  createUser(userData) {
    const user = userRepository.create(userData)
    if(!user) {
      return null
    }
    return user;
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
