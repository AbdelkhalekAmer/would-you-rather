import './QuestionsToAnswer.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import QuestionToAnswerList from '../../Components/Question/QuestionToAnswerList';

const QuestionsToAnswer = () => {
    const [questionsToAnswer, setQuestionsToAnswer] = useState([]);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions);

    const isQuestionNotAnsweredByAuthenticatedUser = (question) => {
        const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
        const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
        return !(hasVotedForOptionOne || hasVotedForOptionTwo);
    };

    const toQuestionToAnswerCard = (questionToAnswer) => ({
        author: questionToAnswer.author,
        question: {
            id: questionToAnswer.id,
            optionOne: questionToAnswer.optionOne.text,
            optionTwo: questionToAnswer.optionTwo.text
        }
    });

    useEffect(
        () => setQuestionsToAnswer([...questions.filter(isQuestionNotAnsweredByAuthenticatedUser).map(toQuestionToAnswerCard)]),
        [questionsToAnswer]
    );

    return (<Home>
        <QuestionToAnswerList questionsToAnswer={questionsToAnswer} />
    </Home>);
};

export default QuestionsToAnswer;