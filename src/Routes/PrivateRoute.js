import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    //TODO: Get correct value
    const isLoggedIn = true;

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ?
                    (<Component {...props} />) :
                    (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
            }
        />
    );
}

export default PrivateRoute;