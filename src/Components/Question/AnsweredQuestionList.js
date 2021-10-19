import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';
import StaticCard from '../UI/StaticCard/StaticCard';
import { Link } from 'react-router-dom';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    return answeredQuestions.length ? answeredQuestions.map(answeredQuestion => (<StaticCard key={answeredQuestion.id} >
        <AnsweredQuestion {...answeredQuestion} />
        <Link to={`/question/${answeredQuestion.id}`}>View</Link>
    </StaticCard>)) : <p>No answered questions</p>;
};

export default AnsweredQuestionList;