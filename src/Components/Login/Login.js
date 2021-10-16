import './Login.css';
import { useEffect, useState } from 'react';
import UserList from '../User/UserList';
import * as UserService from '../../Services/UserService';

const Login = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => UserService.getAll().then(setUsers), []);

    return users ? (<UserList users={users} />) : null;
};

export default Login;