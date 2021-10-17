import './UserList.css';
import User from './User';

const UserList = ({ users }) => (<ul className='user-list'>
    {users.map(user => (<User key={user.id} {...user} />))}
</ul>);

export default UserList;