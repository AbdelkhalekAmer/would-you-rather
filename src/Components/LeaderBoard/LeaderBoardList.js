import './LeaderBoardList.css';
import LeaderBoardItem from './LeaderBoardItem';
import StaticCard from '../UI/StaticCard/StaticCard';

const LeaderBoardList = ({ usersScores }) => {
    return usersScores.map(userScores => (<StaticCard key={userScores.user.id}><LeaderBoardItem {...userScores} /></StaticCard>));
};

export default LeaderBoardList;