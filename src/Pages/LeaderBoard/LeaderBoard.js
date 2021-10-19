import { useSelector } from 'react-redux';
import LeaderBoardList from '../../Components/LeaderBoard/LeaderBoardList';
import Page from '../Page';
import './LeaderBoard.css';

const LeaderBoard = () => {
    const usersScores = useSelector(state => state.user.users)
        .map(user => {
            const totalAnsweredQuestions = Object.keys(user.answers).length;
            const totalAskedQuestion = user.questions.length;

            return {
                user: {
                    id: user.id,
                    name: user.name,
                    avatarURL: user.avatarURL
                },
                totalAnsweredQuestions,
                totalAskedQuestion,
                score: totalAnsweredQuestions + totalAskedQuestion
            };
        })
        .sort((a, b) => b.score - a.score);

    return (<Page>
        <LeaderBoardList usersScores={usersScores} />
    </Page>);
};

export default LeaderBoard;