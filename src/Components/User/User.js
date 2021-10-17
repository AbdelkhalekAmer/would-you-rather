import './User.css';
import { useDispatch } from 'react-redux';
import { setUserAsAuthenticated } from '../../Store/user-actions';
import Card from '../UI/Card/Card';

const User = ({ id, name, avatarURL }) => {

    const dispatch = useDispatch();

    const selectUserHandler = _ => dispatch(setUserAsAuthenticated(id));

    return (<li className="user-item" onClick={selectUserHandler}>
        <Card>
            <img src={avatarURL} alt='avatar' />
            <span>{name}</span>
        </Card>
    </li>);
};

export default User;