import './Login.css';
import UserList from '../User/UserList';

const Login = ({ users }) => {
    return (<div className='login'>
        <h3>Who are you?</h3>
        <UserList users={users} />
    </div>);
};

export default Login;