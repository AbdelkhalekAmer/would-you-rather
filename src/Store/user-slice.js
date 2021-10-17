import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER = {
    id: null,
    name: null,
    avatarURL: null,
    answers: {},
    questions: []
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        authenticatedUser: INITIAL_USER
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = [...action.payload.users];
        },
        setAuthenticatedUser: (state, action) => {
            const user = action.payload.user;
            if (!user || !user.id || !user.name || !user.avatarURL) throw Error(`Invalid user data, ${JSON.stringify(user)}`);
            state.authenticatedUser = { ...user };
        },
        unSetAuthenticatedUser: (state, action) => {
            state.authenticatedUser = { ...INITIAL_USER };
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;