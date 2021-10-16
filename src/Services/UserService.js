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
export const getAll = () => _getUsers().then(rawUsers => {
    const users = [];
    for (const key in rawUsers) users.push(rawUsers[key]);
    return users;
});