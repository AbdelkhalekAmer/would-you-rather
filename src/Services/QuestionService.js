import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../Utils/_DATA';

export const getAll = async () => {
    const rawQuestions = await _getQuestions();
    const questions = [];
    for (const key in rawQuestions) questions.push(rawQuestions[key]);
    return questions;
};

export const save = (info) => _saveQuestion(info);

export const saveAnswer = (authenticatedUser, qid, answer) => _saveQuestionAnswer(authenticatedUser, qid, answer);