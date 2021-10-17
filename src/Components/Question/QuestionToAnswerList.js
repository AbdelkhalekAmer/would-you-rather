import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questionsToAnswer }) => {
    return questionsToAnswer.map(questionToAnswer => <QuestionToAnswer key={questionToAnswer.id} {...questionToAnswer} />);
};

export default QuestionToAnswerList;