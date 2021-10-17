import './Login.css';
import { useDispatch } from 'react-redux';
import UserList from '../User/UserList';
import { getAuthenticateUser } from '../../Store/user-actions';

const Login = ({ users }) => {
    const dispatch = useDispatch();

    const selectUserHandler = id => {
        dispatch(getAuthenticateUser(id));
    };

    return (<div className='login'>
        <h3>Who are you?</h3>
        <UserList users={users} onSelectUserHandler={selectUserHandler} />
    </div>);
};

export default Login;