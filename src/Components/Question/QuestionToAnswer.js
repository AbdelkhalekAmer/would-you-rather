import './QuestionToAnswer.css';
import StaticCard from '../UI/StaticCard/StaticCard';

const QuestionToAnswer = ({ author, question }) => {
    return (<StaticCard>
        <div>{JSON.stringify(author)}</div>
        <form>
            <h3> Would you rather... </h3>
            <input type='radio' id='optionOne' name='option' value='optionOne' />
            <label htmlFor='optionOne'>{question.optionOne}</label>
            <br />
            <input type='radio' id='optionTwo' name='option' value='optionTwo' />
            <label htmlFor='optionTwo'>{question.optionTwo}</label>
            <br />
            <input type='submit' />
        </form>
    </StaticCard>);
};

export default QuestionToAnswer;