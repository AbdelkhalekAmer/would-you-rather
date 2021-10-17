import './AnsweredQuestionList.css';
import AnsweredQuestion from './AnsweredQuestion';

const AnsweredQuestionList = ({ answeredQuestions }) => {
    return answeredQuestions.map(answeredQuestion => <AnsweredQuestion key={answeredQuestion.id} {...answeredQuestion} />);
};

export default AnsweredQuestionList;