import './User.css';

const User = ({ name, avatarURL }) => (<div className="user-item" >
    <span>{name}</span>
    <img src={avatarURL} alt='avatar' />
</div>);

export default User;