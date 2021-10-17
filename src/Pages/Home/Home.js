import './Home.css';
import Page from '../Page';

const Home = ({ children }) => {
    return (<Page>
        <div>Home</div>
        <div>
            {children}
        </div>
    </Page>);
};

export default Home;