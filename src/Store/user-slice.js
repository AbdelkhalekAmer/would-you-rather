import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        avatarURL: null
    },
    reducers: {
        setAuthenticatedUser: (state, action) => {
            const user = action.payload.user;
            if (!user || !user.id || !user.name || !user.avatarURL) throw Error(`Invalid user data, ${JSON.stringify(user)}`);
            state.id = user.id;
            state.name = user.name;
            state.avatarURL = user.avatarURL;
        }
    }
});

export default userSlice;