import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        authenticatedUser: {
            id: null,
            name: null,
            avatarURL: null,
            answers: {},
            questions: []
        }
    },
    reducers: {
        setAuthenticatedUser: (state, action) => {
            const user = action.payload.user;
            if (!user || !user.id || !user.name || !user.avatarURL) throw Error(`Invalid user data, ${JSON.stringify(user)}`);
            state.authenticatedUser = { ...user };
        },
        setUsers: (state, action) => {
            const users = action.payload.users;
            state.users = [...users];
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;