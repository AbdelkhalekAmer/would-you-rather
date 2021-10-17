import './CreateQuestion.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../../Store/question-actions';

const CreateQuestion = () => {
    const dispatch = useDispatch();

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const [options, updateOptions] = useState({ optionOne: '', optionTwo: '' });

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
            optionOne: options.optionOne,
            optionTwo: options.optionTwo
        }));
    }

    return (<div>
        <h2>Create New</h2>
        <form onSubmit={createQuestionHandler}>
            <h3>Would you rather?</h3>
            <input
                placeholder='Option One...'
                value={options.optionOne}
                onChange={onChangingOptionOneHandler} />
            <h3> or </h3>
            <input
                placeholder='Option Two...'
                value={options.optionTwo}
                onChange={onChangingOptionTwoHandler} />
            <input type='submit' />
        </form>
    </div>);
};

export default CreateQuestion;