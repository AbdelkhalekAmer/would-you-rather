import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';
import StaticCard from '../UI/StaticCard/StaticCard';
import { Link, useHistory } from 'react-router-dom';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    const history = useHistory();

    return answeredQuestions.length ? answeredQuestions.map(answeredQuestion => (<div className='answered-question-list-item'>
        <Link to={{ pathname: `/question/${answeredQuestion.id}`, state: { from: history.location } }}>
        <StaticCard key={answeredQuestion.id} >
            <AnsweredQuestion {...answeredQuestion} />
        </StaticCard>
    </Link>
    </div>)) : <p>No answered questions</p>;
};

export default AnsweredQuestionList;