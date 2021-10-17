import './AnsweredQuestions.css';
import Home from './Home';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const AnsweredQuestions = () => {
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions);

    const isQuestionAnsweredByAuthenticatedUser = (question) => {
        const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
        const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
        return hasVotedForOptionOne || hasVotedForOptionTwo;
    };

    useEffect(() => setAnsweredQuestions([...questions.filter(isQuestionAnsweredByAuthenticatedUser)]), []);

    return (<Home>
        <div>{JSON.stringify(answeredQuestions)}</div>
    </Home>);
};

export default AnsweredQuestions;