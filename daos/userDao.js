const User = require('../models/userModel');

class UserDao {
    static async getAllUsers() {
        return await User.find({ isDeleted: false });
    }

    static async getUserById(id) {
        return await User.findById(id);
    }

    static async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    static async updateUser(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    static async softDeleteUser(id) {
        return await User.findByIdAndUpdate(id, { isDeleted: true });
    }
}

module.exports = UserDao;
