import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questions }) => {
    return questions.length ? questions.map(question => (<div className='question-to-answer-list-item'>
        <QuestionToAnswer key={question.details.id}
        author={question.author}
        question={question.details} />
    </div>)) : <p>No questions available</p>;
};

export default QuestionToAnswerList;