import { Fragment } from 'react';
import User from '../User/User';
import './LeaderBoardItem.css';

const LeaderBoardItem = ({ user, totalAnsweredQuestions, totalAskedQuestion, score }) => {
    return (<Fragment>
        <User {...user} />
        <div className='scores'>
            <span>Answered Questions: {totalAnsweredQuestions}</span>
            <span>Questions Asked: {totalAskedQuestion}</span>
        </div>
        <div className='total'>
            <span>Score</span>
            <span>{score}</span>
        </div>
    </Fragment>);
};

export default LeaderBoardItem;