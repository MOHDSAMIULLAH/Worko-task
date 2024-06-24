const UserService = require('../services/userService');
const UserDto = require('../dtos/userDto');
const userValidator = require('../validators/userValidator');

class UserController {
    static async listUsers(req, res) {
        const users = await UserService.getAllUsers();
        res.json(users.map(user => new UserDto(user)));
    }

    static async getUser(req, res) {
        const user = await UserService.getUserById(req.params.userId);
        res.json(new UserDto(user));
    }

    static async createUser(req, res) {
        const { error } = userValidator.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await UserService.createUser(req.body);
        res.status(201).json(new UserDto(user));
    }

    static async updateUser(req, res) {
        const { error } = userValidator.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await UserService.updateUser(req.params.userId, req.body);
        res.json(new UserDto(user));
    }

    static async patchUser(req, res) {
        const user = await UserService.updateUser(req.params.userId, req.body);
        res.json(new UserDto(user));
    }

    static async deleteUser(req, res) {
        await UserService.softDeleteUser(req.params.userId);
        res.status(204).send();
    }
}

module.exports = UserController;
