import './LandingPage.css';
import { useState, useEffect } from 'react';
import * as userService from '../../Services/UserService';
import Login from '../../Components/Login/Login';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
const LandingPage = () => {
    const [users, setUsers] = useState([]);
    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    useEffect(() => userService.getAll().then(setUsers), []);

    return authenticatedUser && authenticatedUser.id ?
        (<Redirect to='/Home/Questions-to-answer' />) :
        (<div className='landing-page'><Login users={users} /></div>);
};

export default LandingPage;