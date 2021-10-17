import './QuestionsToAnswer.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import QuestionToAnswerList from '../../Components/Question/QuestionToAnswerList';

const QuestionsToAnswer = () => {
    const users = useSelector(state => state.user.users);

    const questions = useSelector(state => state.question.questions);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const [questionsToAnswer, setQuestionsToAnswer] = useState([]);

    const isQuestionNotAnsweredByAuthenticatedUser = (question) => {
        const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
        const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
        return !(hasVotedForOptionOne || hasVotedForOptionTwo);
    };

    const toQuestionToAnswerCard = (questionToAnswer) => {
        const author = users.find(user => user.id === questionToAnswer.author);
        return {
            author: {
                id: author.id,
                name: author.name,
                avatarURL: author.avatarURL
            },
            question: {
                id: questionToAnswer.id,
                text: `...${questionToAnswer.optionOne.text}...`
            }
        };
    };

    useEffect(
        () => setQuestionsToAnswer([...questions.filter(isQuestionNotAnsweredByAuthenticatedUser).map(toQuestionToAnswerCard)]),
        [questionsToAnswer]
    );

    return (<Home>
        <QuestionToAnswerList questionsToAnswer={questionsToAnswer} />
    </Home>);
};

export default QuestionsToAnswer;