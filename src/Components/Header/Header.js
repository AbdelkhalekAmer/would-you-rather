import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userActions } from '../../Store/user-slice';

const Header = () => {
    const dispatch = useDispatch();

    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    const logoutHandler = _ => dispatch(userActions.unSetAuthenticatedUser());

    return (<div className='header'>
        <h1>{'<WOULD YOU RATHER />'}</h1>
        <ul>
            <li><Link to='/home/questions'>Home</Link></li>
            <li><Link to='/add'>New Question</Link></li>
            <li><Link to='/leaderboard'>Leader Board</Link></li>
        </ul>
        <div className='logout'>
            <div className='user'>
                <img src={authenticatedUser.avatarURL} alt='avatar' />
                <span>{authenticatedUser.name}</span>
            </div>
            <Link to='/login' onClick={logoutHandler}>Logout</Link>
        </div>
    </div>);
};

export default Header;