import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questions }) => {
    return questions.map(question => <QuestionToAnswer key={question.details.id}
        author={question.author}
        question={question.details} />);
};

export default QuestionToAnswerList;