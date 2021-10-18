import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';
import StaticCard from '../UI/StaticCard/StaticCard';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    return answeredQuestions.map(answeredQuestion => (<StaticCard>
        <AnsweredQuestion key={answeredQuestion.id} {...answeredQuestion} />
    </StaticCard>));
};

export default AnsweredQuestionList;