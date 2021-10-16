import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../Utils/_DATA';

export const getAll = () => _getQuestions();

export const save = (info) => _saveQuestion(info);

export const saveAnswer = (authenticatedUser, qid, answer) => _saveQuestionAnswer(authenticatedUser, qid, answer);