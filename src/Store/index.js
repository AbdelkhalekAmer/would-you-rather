import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./question-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: { user: userSlice.reducer, question: questionSlice.reducer }
});

export default store;