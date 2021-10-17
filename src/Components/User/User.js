import './User.css';
import Card from '../UI/Card/Card';

const User = ({ user, onSelectUserHandler }) => {
    return (<li className="user-item" onClick={onSelectUserHandler(user.id)}>
        <Card>
            <img src={user.avatarURL} alt='avatar' />
            <span>{user.name}</span>
        </Card>
    </li>);
};

export default User;