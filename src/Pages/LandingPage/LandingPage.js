import './LandingPage.css';
import { useEffect } from 'react';
import Login from '../../Components/Login/Login';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Store/user-actions';
const LandingPage = () => {
    const dispatch = useDispatch();
    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    useEffect(() => dispatch(getAllUsers()), [dispatch]);

    return authenticatedUser && authenticatedUser.id ?
        (<Redirect to='/Home/Questions-to-answer' />) :
        (<div className='landing-page'><Login /></div>);
};

export default LandingPage;