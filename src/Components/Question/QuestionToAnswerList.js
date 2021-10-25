import Card from '../UI/Card/Card';
import QuestionToAnswer from './QuestionToAnswer';
import './QuestionToAnswerList.css';

const QuestionToAnswerList = ({ questions }) => {
    return questions.length ? questions.map(question => (<Card key={question.details.id}>
        <QuestionToAnswer author={question.author} question={question.details} />
    </Card>)) : <p>No questions available</p>;
};

export default QuestionToAnswerList;