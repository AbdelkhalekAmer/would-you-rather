import './LandingPage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../../Store/user-actions';
import Login from '../../Components/Login/Login';

const LandingPage = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);

    useEffect(() => dispatch(loadUsers()), [dispatch]);

    return (<div>
        <Login users={users} />
    </div>);
};

export default LandingPage;