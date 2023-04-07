import UserHelpers from '../models/user/helpers';
import User from '../models/user/user';

export namespace UserService {
    export const getAllUsers = (): Array<User> => {
        return UserHelpers.getAllUsers();
    }

    export const getUserById = (id: number): User => {
        return UserHelpers.getUserById(id);
    }

    export const createUser = (user: User): void => {
        UserHelpers.createUser(user);
    }

    export const deleteUser = (id: number): void => {
        UserHelpers.deleteUser(id);
    }

}

export default UserService;