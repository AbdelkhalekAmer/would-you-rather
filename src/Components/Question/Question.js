import './Question.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveAnswer } from '../../Store/question-actions';
import { Fragment, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import User from '../User/User';

const Question = ({ author, question }) => {
    const history = useHistory();

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
        <Redirect to={{ pathname: '/home/questions', state: { from: history.location } }} /> :
        (<Fragment>
            <User {...author} />
            <form className='question0-form' onSubmit={answerSubmissionHandler}>
                <h3> Would you rather... </h3>
                <div>
                    <input type='radio' id='optionOne' name='option' value='optionOne' onChange={onChangingAnswer} />
                    <label htmlFor='optionOne'>{question.optionOne}</label>
                </div>
                <br />
                <div>
                    <input type='radio' id='optionTwo' name='option' value='optionTwo' onChange={onChangingAnswer} />
                    <label htmlFor='optionTwo'>{question.optionTwo}</label>
                </div>
                <br />
                <input type='submit' />
            </form>
        </Fragment>);
};

export default Question;