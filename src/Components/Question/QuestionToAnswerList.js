import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questions }) => {
    return questions.length ? questions.map(question => <QuestionToAnswer key={question.details.id}
        author={question.author}
        question={question.details} />) : <p>No questions available</p>;
};

export default QuestionToAnswerList;