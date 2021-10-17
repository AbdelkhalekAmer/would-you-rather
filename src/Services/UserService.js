import { _getUsers } from '../Utils/_DATA';

/**
 * 
 * @returns {Promise<[{
 *             id: string;
 *             name: string;
 *             avatarURL: string;
 *             answers: {};
 *             questions: string[];
 *          }]>}
 */
export const getAll = async () => {
    const rawUsers = await _getUsers();
    const users = [];
    for (const key in rawUsers) users.push(rawUsers[key]);
    return users;
};

/**
 * 
 * @returns {Promise<{
 *             id: string;
 *             name: string;
 *             avatarURL: string;
 *             answers: {};
 *             questions: string[];
 *          }>}
 */
export const get = async (id) => {
    const users = await getAll();
    const user = users.find(user => user.id === id);
    return user;
};