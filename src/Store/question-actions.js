import { questionActions } from "./question-slice";
import * as questionService from '../Services/QuestionService';

export const getAllQuestions = () => {
    return async (dispatch) => {
        try {
            const questions = await questionService.getAll();
            dispatch(questionActions.setQuestions({ questions }));
        } catch (error) {
            //TODO: to be replaced by a notification service or notification reducer.
            alert(error);
        }
    };
};

export const createQuestion = (question) => {
    console.log(question);
    return async (dispatch) => {
        try {
            if (!question || !question.optionOne || !question.optionTwo || !question.author) {
                throw Error(`Invalid question details: ${JSON.stringify(question)}`);
            }
            const newQuestion = await questionService.save(question);
            dispatch(questionActions.saveQuestion({ question: newQuestion }));
        } catch (error) {
            //TODO: to be replaced by a notification service or notification reducer.
            alert(error);
        }
    };
};