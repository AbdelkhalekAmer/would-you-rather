import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Question from '../../Components/Question/Question';
import StaticCard from '../../Components/UI/StaticCard/StaticCard';
import Page from '../Page';
import './QuestionPage.css';

const QuestionPage = () => {
    const { questionId } = useParams();

    const [questionDetails, setQuestionDetails] = useState({});

    const users = useSelector(state => state.user.users);

    const questions = useSelector(state => state.question.questions);

    useEffect(() => setQuestionDetails(prevState => {
        const question = { ...questions.find(question => question.id === questionId) };
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
    }), [questionId, questions, users]);

    return questionDetails.author && questionDetails.question ? (<Page>
        <StaticCard>
            <Question author={questionDetails.author} question={questionDetails.question} />
        </StaticCard>
    </Page>) : <p>Loading...</p>;
};

export default QuestionPage;