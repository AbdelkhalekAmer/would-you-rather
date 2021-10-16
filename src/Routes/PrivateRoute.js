import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user);

    return (
        <Route
            {...rest}
            render={props =>
                user && user.id ?
                    (<Component {...props} />) :
                    (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
            }
        />
    );
}

export default PrivateRoute;