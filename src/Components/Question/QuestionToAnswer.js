import './QuestionToAnswer.css';
import Card from '../UI/Card/Card';
import User from '../User/User';
import { Link, useHistory } from 'react-router-dom';

const QuestionToAnswer = ({ author, question }) => {
    const history = useHistory();

    return (<Link to={{ pathname: `/questions/${question.id}`, state: { from: history.location } }}>
        <Card>
            <User {...author} />
            <div className='question'>
                <p>{question.text}</p>
            </div>
        </Card>
    </Link>);
};

export default QuestionToAnswer;