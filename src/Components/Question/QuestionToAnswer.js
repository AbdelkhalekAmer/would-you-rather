import './QuestionToAnswer.css';
import StaticCard from '../UI/StaticCard/StaticCard';
import User from '../User/User';
import { Link, useHistory } from 'react-router-dom';

const QuestionToAnswer = ({ author, question }) => {
    const history = useHistory();

    return (<StaticCard>
        <User {...author} />
        <div className='question'>
            <p>{question.text}</p>
            <Link to={{ pathname: `/questions/${question.id}`, state: { from: history.location } }}>View</Link>
        </div>
    </StaticCard>);
};

export default QuestionToAnswer;