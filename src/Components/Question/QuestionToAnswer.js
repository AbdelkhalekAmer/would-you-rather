import './QuestionToAnswer.css';
import StaticCard from '../UI/StaticCard/StaticCard';
import { Link } from 'react-router-dom';

const QuestionToAnswer = ({ author, question }) => {
    return (<StaticCard>
        <div>
            <img src={author.avatarURL} alt='avatar' />
            <span>{author.name}</span>
        </div>
        <div>
            <p>{question.text}</p>
            <Link to={`/questions/${question.id}`}>View</Link>
        </div>
    </StaticCard>);
};

export default QuestionToAnswer;