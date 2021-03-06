import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userActions } from '../../Store/user-slice';
import User from '../User/User';

const Header = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const logoutHandler = _ => dispatch(userActions.unSetAuthenticatedUser());

    return (<div className='header'>
        <h1 className='header-item'>{'<WOULD YOU RATHER />'}</h1>
        <ul className='header-item'>
            <li><Link to={{ pathname: '/home/questions', state: { from: history.location } }}>{'"Home"'}</Link></li>
            <li><Link to={{ pathname: '/add', state: { from: history.location } }}>{'"New Question"'}</Link></li>
            <li><Link to={{ pathname: '/leaderboard', state: { from: history.location } }}>{'"Leader Board"'}</Link></li>
        </ul>
        <div className='logout header-item'>
            <User {...authenticatedUser} />
            <Link to={{ pathname: '/login', state: { from: history.location } }} onClick={logoutHandler}><span>Logout</span></Link>
        </div>
    </div>);
};

export default Header;