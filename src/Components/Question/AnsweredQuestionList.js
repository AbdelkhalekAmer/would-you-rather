import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';
import StaticCard from '../UI/StaticCard/StaticCard';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    return answeredQuestions.length ? answeredQuestions.map(answeredQuestion => (<StaticCard>
        <AnsweredQuestion key={answeredQuestion.id} {...answeredQuestion} />
    </StaticCard>)) : <p>No answered questions</p>;
};

export default AnsweredQuestionList;