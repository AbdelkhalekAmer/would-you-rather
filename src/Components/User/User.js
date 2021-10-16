import Card from '../UI/Card/Card';
import './User.css';

const User = ({ avatarURL, name }) => {
    return (<li className="user-item">
        <Card>
            <img src={avatarURL} alt={name} />
            <span>{name}</span>
        </Card>
    </li>);
};

export default User;