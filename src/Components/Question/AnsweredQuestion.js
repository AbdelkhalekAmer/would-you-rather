import './AnsweredQuestion.css';
import StaticCard from '../UI/StaticCard/StaticCard';

const AnsweredQuestion = ({ author, optionOne, optionTwo, totalVotes }) => {
    return (<StaticCard>
        {JSON.stringify({ author, optionOne, optionTwo, totalVotes })}
    </StaticCard>);
};

export default AnsweredQuestion;