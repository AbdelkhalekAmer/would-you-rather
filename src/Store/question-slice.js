import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_QUESTION = {};

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        questions: []
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = [...action.payload.questions.sort((a, b) => b.timestamp - a.timestamp)];
        },
        saveQuestion: (state, action) => {
            state.questions = [action.payload.question, ...state.questions];
        }
    }
});

export const questionActions = questionSlice.actions;

export default questionSlice;