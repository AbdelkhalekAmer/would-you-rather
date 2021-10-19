import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';
import StaticCard from '../UI/StaticCard/StaticCard';
import { Link, useHistory } from 'react-router-dom';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    const history = useHistory();
    
    return answeredQuestions.length ? answeredQuestions.map(answeredQuestion => (<StaticCard key={answeredQuestion.id} >
        <AnsweredQuestion {...answeredQuestion} />
        <Link to={{ pathname: `/question/${answeredQuestion.id}`, state: { from: history.location } }}>View</Link>
    </StaticCard>)) : <p>No answered questions</p>;
};

export default AnsweredQuestionList;