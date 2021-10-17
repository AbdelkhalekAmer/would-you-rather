import { userActions } from "./user-slice";
import * as userService from '../Services/UserService';

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const users = await userService.getAll();
            dispatch(userActions.setUsers({ users }));
        } catch (error) {
            //TODO: to be replaced by a notification service or notification reducer.
            alert(error);
        }
    };
};

export const setUserAsAuthenticated = id => {
    return async (dispatch) => {
        try {
            const user = await userService.get(id);
            dispatch(userActions.setAuthenticatedUser({ user }));
        } catch (error) {
            //TODO: to be replaced by a notification service or notification reducer.
            alert(error);
        }
    };
};