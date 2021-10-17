import './AnsweredQuestions.css';
import Home from './Home';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AnsweredQuestionList from '../../Components/Question/AnsweredQuestionList';

const AnsweredQuestions = () => {
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions);

    const isQuestionAnsweredByAuthenticatedUser = (question) => {
        const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
        const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
        return hasVotedForOptionOne || hasVotedForOptionTwo;
    };

    const toAnsweredQuestionCard = (answeredQuestion) => ({
        id: answeredQuestion.id,
        author: answeredQuestion.author,
        optionOne: {
            text: answeredQuestion.optionOne.text,
            isVotedByAuthenticatedUser: answeredQuestion.optionOne.votes.includes(authenticatedUser.id),
            totalVotes: answeredQuestion.optionOne.votes.length
        },
        optionTwo: {
            text: answeredQuestion.optionTwo.text,
            isVotedByAuthenticatedUser: answeredQuestion.optionTwo.votes.includes(authenticatedUser.id),
            totalVotes: answeredQuestion.optionTwo.votes.length
        },
        totalVotes: answeredQuestion.optionOne.votes.length + answeredQuestion.optionTwo.votes.length
    });

    useEffect(() => setAnsweredQuestions([...questions.filter(isQuestionAnsweredByAuthenticatedUser).map(toAnsweredQuestionCard)]), []);

    return (<Home><AnsweredQuestionList answeredQuestions={answeredQuestions} /></Home>);
};

export default AnsweredQuestions;