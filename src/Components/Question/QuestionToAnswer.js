import './QuestionToAnswer.css';
import StaticCard from '../UI/StaticCard/StaticCard';
import { Link, useHistory } from 'react-router-dom';

const QuestionToAnswer = ({ author, question }) => {
    const history = useHistory();

    return (<StaticCard>
        <div className='user'>
            <img src={author.avatarURL} alt='avatar' />
            <span>{author.name}</span>
        </div>
        <div className='question'>
            <p>{question.text}</p>
            <Link to={{ pathname: `/questions/${question.id}`, state: { from: history.location } }}>View</Link>
        </div>
    </StaticCard>);
};

export default QuestionToAnswer;