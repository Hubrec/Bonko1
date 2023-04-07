import { database } from '../../config/database';
import User from '../user/user';

export namespace UserHelpers {
    export const getAllUsers = (): Array<User> => {
        return database.prepare('SELECT * FROM user').all();
    };

    export const getUserById = (id: number): User => {
        return database.prepare('SELECT * FROM user WHERE id = ?').get([id]);
    };

    export const createUser = (user: User): void => {
        database.prepare('INSERT INTO user (username) VALUES (?)').run([user.username]);
    }

    export const deleteUser = (id: number): void => {
        database.prepare('DELETE FROM user WHERE id = ?').run([id]);
    }
}

export default UserHelpers;