import './UserList.css';
import User from './User';
import Card from '../UI/Card/Card';
import { useDispatch } from 'react-redux';
import { setUserAsAuthenticated } from '../../Store/user-actions';

const UserList = ({ users }) => {
    const dispatch = useDispatch();

    const selectUserHandler = id => _ => dispatch(setUserAsAuthenticated(id));

    return (<ul className='user-list'>
        {users.map(user => (<li key={user.id} onClick={selectUserHandler(user.id)}>
            <Card>
                <User {...user} />
            </Card>
        </li>))}
    </ul>);
}

export default UserList;