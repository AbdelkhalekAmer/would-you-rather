import './AnsweredQuestion.css';
import { Fragment } from 'react';
import User from '../User/User';

const AnsweredQuestion = ({ author, optionOne, optionTwo, totalVotes }) => {
    const answered = <span className='answer-mark'>YOUR ANSWER</span>;

    return (<Fragment>
        <User {...author} />
        <div className='answered-question'>
            <h3>Would you rather?</h3>
            <ul>
                <li>
                    <p>a) {optionOne.text}{optionOne.isVotedByAuthenticatedUser ? answered : null}</p>
                    <p className='totals'>{`${optionOne.totalVotes} out of ${totalVotes}`}</p>
                </li>
                <li>
                    <p>b) {optionTwo.text}{optionTwo.isVotedByAuthenticatedUser ? answered : null}</p>
                    <p className='totals'>{`${optionTwo.totalVotes} out of ${totalVotes}`}</p>
                </li>
            </ul>
        </div>
    </Fragment>);
};

export default AnsweredQuestion;