import './QuestionsToAnswer.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

const QuestionsToAnswer = () => {
    const [questionsToAnswer, setQuestionsToAnswer] = useState([]);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions);

    const isQuestionNotAnsweredByAuthenticatedUser = (question) => {
        const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
        const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
        return !(hasVotedForOptionOne || hasVotedForOptionTwo);
    };

    useEffect(() => setQuestionsToAnswer([...questions.filter(isQuestionNotAnsweredByAuthenticatedUser)]), [questionsToAnswer]);

    return (<Home>
        <div>{JSON.stringify(questionsToAnswer)}</div>
    </Home>);
};

export default QuestionsToAnswer;