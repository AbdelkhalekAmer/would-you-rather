import './QuestionsToAnswer.css';
import { useSelector } from 'react-redux';
import Home from './Home';
import QuestionToAnswerList from '../../Components/Question/QuestionToAnswerList';

const QuestionsToAnswer = () => {
    const users = useSelector(state => state.user.users);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const questions = useSelector(state => state.question.questions)
        .filter((question) => {
            const hasVotedForOptionOne = question.optionOne.votes.includes(authenticatedUser.id);
            const hasVotedForOptionTwo = question.optionTwo.votes.includes(authenticatedUser.id);
            return !(hasVotedForOptionOne || hasVotedForOptionTwo);
        }).map((questionToAnswer) => {
            const author = users.find(user => user.id === questionToAnswer.author);
            return {
                author: {
                    id: author.id,
                    name: author.name,
                    avatarURL: author.avatarURL
                },
                details: {
                    id: questionToAnswer.id,
                    text: `...${questionToAnswer.optionOne.text}...`
                }
            };
        });

    return (<Home>
        <QuestionToAnswerList questions={questions} />
    </Home>);
};

export default QuestionsToAnswer;