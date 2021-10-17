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