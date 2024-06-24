const userDao = require('../daos/userDao');

class UserService {
    static async getAllUsers() {
        return await userDao.getAllUsers();
    }

    static async getUserById(id) {
        return await userDao.getUserById(id);
    }

    static async createUser(userData) {
        return await userDao.createUser(userData);
    }

    static async updateUser(id, userData) {
        return await userDao.updateUser(id, userData);
    }

    static async softDeleteUser(id) {
        return await userDao.softDeleteUser(id);
    }
}

module.exports = UserService;
