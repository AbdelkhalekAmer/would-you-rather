import './Login.css';
import UserList from '../User/UserList';
import { useSelector } from 'react-redux';

const Login = () => {
    const users = useSelector(state => state.user.users);

    return (<div className='login'>
        <h1>Who are you?</h1>
        <UserList users={users} />
    </div>);
};

export default Login;