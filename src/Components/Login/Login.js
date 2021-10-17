import './Login.css';
import UserList from '../User/UserList';
import { useSelector } from 'react-redux';

const Login = () => {
    const users = useSelector(state => state.user.users);

    return (<div className='login'>
        <h3>Who are you?</h3>
        <UserList users={users} />
    </div>);
};

export default Login;