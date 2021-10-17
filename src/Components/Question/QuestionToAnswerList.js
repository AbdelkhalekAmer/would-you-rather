import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questionsToAnswer }) => {
    return questionsToAnswer.map(questionToAnswer => <QuestionToAnswer key={questionToAnswer.id}
        author={questionToAnswer.author}
        question={questionToAnswer.question} />);
};

export default QuestionToAnswerList;