import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Question from '../../Components/Question/Question';
import StaticCard from '../../Components/UI/StaticCard/StaticCard';
import Page from '../Page';
import './QuestionPage.css';
import NotFound from '../NotFound/NotFound';

const QuestionPage = () => {
    const { questionId } = useParams();

    const users = useSelector(state => state.user.users);

    const questions = useSelector(state => state.question.questions)
        .filter(question => question.id === questionId)
        .map(question => {
            const author = users.find(user => user.id === question.author);
            return {
                author: {
                    id: author.id,
                    name: author.name,
                    avatarURL: author.avatarURL
                },
                question: {
                    id: question.id,
                    optionOne: question.optionOne.text,
                    optionTwo: question.optionTwo.text
                }
            };
        });

    const questionDetails = questions.length ? questions[0] : {};

    return (<Page>
        <StaticCard>
            {questionDetails.author && questionDetails.question ?
                (<Question author={questionDetails.author} question={questionDetails.question} />) : (<NotFound />)}
        </StaticCard>
    </Page>);
};

export default QuestionPage;