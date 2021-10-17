import './Question.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveAnswer } from '../../Store/question-actions';
import { useState } from 'react';
import { Redirect } from 'react-router';

const Question = ({ author, question }) => {
    const dispatch = useDispatch();

    const [answer, updateAnswer] = useState('');

    const [redirect, setRedirect] = useState(false);

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const answerSubmissionHandler = event => {
        event.preventDefault();
        if (answer) {
            dispatch(saveAnswer(authenticatedUser.id, question.id, answer));
            setRedirect(true);
        }
    };

    const onChangingAnswer = event => {
        const answer = event.target.value;
        updateAnswer(answer);
    };

    return redirect ?
        <Redirect to='/' /> :
        (<div>
            <div>
                <img src={author.avatarURL} alt='avatar' />
                <span>{author.name}</span>
            </div>
            <form onSubmit={answerSubmissionHandler}>
                <h3> Would you rather... </h3>
                <input type='radio' id='optionOne' name='option' value='optionOne' onChange={onChangingAnswer} />
                <label htmlFor='optionOne'>{question.optionOne}</label>
                <br />
                <input type='radio' id='optionTwo' name='option' value='optionTwo' onChange={onChangingAnswer} />
                <label htmlFor='optionTwo'>{question.optionTwo}</label>
                <br />
                <input type='submit' />
            </form>
        </div>);
};

export default Question;