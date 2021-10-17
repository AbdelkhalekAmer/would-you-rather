import './UserList.css';
import User from './User';

const UserList = ({ users, onSelectUserHandler }) => (<ul className='user-list'>
    {users.map(user => (<User key={user.id} user={user} onSelectUserHandler={onSelectUserHandler} />))}
</ul>);

export default UserList;