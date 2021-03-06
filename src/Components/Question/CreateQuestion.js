import './CreateQuestion.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../../Store/question-actions';
import { Redirect, useHistory } from 'react-router';

const CreateQuestion = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const [options, updateOptions] = useState({ optionOne: '', optionTwo: '' });

    const [redirect, setRedirect] = useState(false);

    const onChangingOptionOneHandler = event => {
        const optionOne = event.target.value;
        updateOptions(prevState => {
            prevState.optionOne = optionOne;
            return { ...prevState };
        });
    };

    const onChangingOptionTwoHandler = event => {
        const optionTwo = event.target.value;
        updateOptions(prevState => {
            prevState.optionTwo = optionTwo;
            return { ...prevState };
        });
    };

    const createQuestionHandler = event => {
        event.preventDefault();

        dispatch(createQuestion({
            author: authenticatedUser.id,
            optionOneText: options.optionOne,
            optionTwoText: options.optionTwo
        }));

        setRedirect(true);
    }

    return redirect ?
        <Redirect to={{ pathname: '/home/questions', state: { from: history.location } }} /> :
        (<div>
            <h2>Create New</h2>
            <form onSubmit={createQuestionHandler}>
                <h3>Would you rather?</h3>
                <input required
                    placeholder='Option One...'
                    value={options.optionOne}
                    onChange={onChangingOptionOneHandler} />
                <h3> or </h3>
                <input required
                    placeholder='Option Two...'
                    value={options.optionTwo}
                    onChange={onChangingOptionTwoHandler} />
                <input type='submit' />
            </form>
        </div>);
};

export default CreateQuestion;