import './Page.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Page = ({ children }) => {
    return (<div className='page'>
        <Header />
        <div className='page-content'>
            {children}
        </div>
        <Footer />
    </div>);
};

export default Page;