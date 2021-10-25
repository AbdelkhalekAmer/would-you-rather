import './QuestionToAnswer.css';
import User from '../User/User';
import { Link, useHistory } from 'react-router-dom';

const QuestionToAnswer = ({ author, question }) => {
    const history = useHistory();

    return (<div className="question">
        <Link to={{ pathname: `/questions/${question.id}`, state: { from: history.location } }}>
            <User {...author} />
            <p>{question.text}</p>
        </Link >
    </div>);
};

export default QuestionToAnswer;