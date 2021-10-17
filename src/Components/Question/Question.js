import './Question.css';

const Question = ({ author, question }) => {
    return (<div>
        <div>
            <img src={author.avatarURL} alt='avatar' />
            <span>{author.name}</span>
        </div>
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
    </div>);
};

export default Question;