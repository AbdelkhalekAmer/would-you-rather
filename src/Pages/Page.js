import './Page.css';
import Header from '../Components/Header/Header';
import { Fragment } from 'react';

const Page = ({ children }) => {
    return (<Fragment>
        <Header></Header>
        <div className='page-content'>
            {children}
        </div>
    </Fragment>);
};

export default Page;