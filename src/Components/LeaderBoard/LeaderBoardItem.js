import { Fragment } from 'react';
import './LeaderBoardItem.css';

const LeaderBoardItem = ({ user, totalAnsweredQuestions, totalAskedQuestion, score }) => {
    return (<Fragment>
        <div className='user'>
            <img src={user.avatarURL} alt='avatar' />
            <span>{user.name}</span>
        </div>
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