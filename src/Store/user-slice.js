import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
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
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;