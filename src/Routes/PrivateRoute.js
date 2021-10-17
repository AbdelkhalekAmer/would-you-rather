import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticatedUser = useSelector(state => state.user.authenticatedUser);

    return (
        <Route
            {...rest}
            render={props =>
                authenticatedUser && authenticatedUser.id ?
                    (<Component {...props} />) :
                    (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
            }
        />
    );
}

export default PrivateRoute;