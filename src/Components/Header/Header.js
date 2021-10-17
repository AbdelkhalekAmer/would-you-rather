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
        <h1>Would you rather?</h1>
        <ul>
            <li><Link to='/Home/Questions-to-answer'>Home</Link></li>
            <li><Link to='/New-question'>New Question</Link></li>
            <li><Link to='/Leader-board'>Leader Board</Link></li>
        </ul>
        <div className='logout'>
            <img src={authenticatedUser.avatarURL} alt='avatar' />
            <Link to='/Login' onClick={logoutHandler}>Logout</Link>
        </div>
    </div>);
};

export default Header;