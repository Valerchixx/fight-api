import { userRepository } from "../repositories/userRepository.js";

class UserService {

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
    const user = this.getOne({id})
    if(!!user) {
      return userRepository.delete(id)
    }
    return null

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

  isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  isPhoneValid = (phone) => {
    return phone.startsWith("+380") && phone.length == 13
  }

  getRedundantKeys = (keys, userKeys) => {
    const redundantKeys = userKeys.filter(item => !keys.includes(item))
    return redundantKeys.length > 0
  }

  isUserWithSameEmail(email) {
    const allUsers  = this.getAll();
    return allUsers.find(item => item.email === email);
  }

  isUserWithSamePhone(phone) {
    const allUsers  = this.getAll();
    return allUsers.find(item => item.phoneNumber === phone);
  }
}

const userService = new UserService();

export { userService };
