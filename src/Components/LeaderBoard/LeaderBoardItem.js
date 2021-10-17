import { Fragment } from 'react';
import './LeaderBoardItem.css';

const LeaderBoardItem = ({ user, totalAnsweredQuestions, totalAskedQuestion, score }) => {
    return (<Fragment>
        <div>
            <img src={user.avatarURL} alt='avatar' />
            <span>{user.name}</span>
        </div>
        <div>
            <span>Answered Questions: {totalAnsweredQuestions}</span>
            <span>Questions Asked: {totalAskedQuestion}</span>
        </div>
        <div>
            <span>Score</span>
            <span>{score}</span>
        </div>
    </Fragment>);
};

export default LeaderBoardItem;