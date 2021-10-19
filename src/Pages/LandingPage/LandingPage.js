import './LandingPage.css';
import { useEffect } from 'react';
import Login from '../../Components/Login/Login';
import { Redirect, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Store/user-actions';
const LandingPage = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    
    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    useEffect(() => dispatch(getAllUsers()), [dispatch]);

    return authenticatedUser && authenticatedUser.id ?
        (<Redirect to={history.location.state ? history.location.state.from : '/'} />) :
        (<div className='landing-page'><Login /></div>);
};

export default LandingPage;