import './Page.css';
import Header from '../Components/Header/Header';
import { Fragment } from 'react';

const Page = ({ children }) => {
    return (<Fragment>
        <Header></Header>
        {children}
    </Fragment>);
};

export default Page;