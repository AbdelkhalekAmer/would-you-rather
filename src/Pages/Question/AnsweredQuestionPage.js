import './AnsweredQuestionPage.css';
import { useSelector } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router';
import Page from '../Page';
import StaticCard from '../../Components/UI/StaticCard/StaticCard';
import AnsweredQuestion from '../../Components/Question/AnsweredQuestion';
import NotFound from '../NotFound/NotFound';

const AnsweredQuestionPage = () => {
    const history = useHistory();

    const { questionId } = useParams();

    const users = useSelector(state => state.user.users);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const filteredAnsweredQuestions = useSelector(state => state.question.questions)
        .filter(question => question.id === questionId)
        .map(answeredQuestion => {
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

    const answeredQuestion = filteredAnsweredQuestions ? filteredAnsweredQuestions[0] : null;

    return (<Page>
        <StaticCard>
            {answeredQuestion && answeredQuestion.id ? <AnsweredQuestion {...answeredQuestion} /> : <NotFound />}
        </StaticCard>
    </Page>);
};

export default AnsweredQuestionPage;