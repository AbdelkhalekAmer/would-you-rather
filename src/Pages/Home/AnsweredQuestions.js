import './AnsweredQuestions.css';
import Home from './Home';
import { useSelector } from 'react-redux';
import AnsweredQuestionList from '../../Components/Question/AnsweredQuestionList';

const AnsweredQuestions = () => {
    const users = useSelector(state => state.user.users);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions)
        .filter((question) => {
            const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
            const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
            return hasVotedForOptionOne || hasVotedForOptionTwo;
        })
        .map((answeredQuestion) => {
            const author = users.find(user => user.id === answeredQuestion.author);

            return {
                id: answeredQuestion.id,
                author: {
                    id: author.id,
                    name: author.name,
                    avatarURL: author.avatarURL
                },
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
            };
        });

    return (<Home><AnsweredQuestionList answeredQuestions={questions} /></Home>);
};

export default AnsweredQuestions;