import './Home.css';
import Page from '../Page';
import Card from '../../Components/UI/Card/Card';
import { Link, useHistory } from 'react-router-dom';

const Home = ({ children }) => {
    const history = useHistory();

    return (<Page>
        <div className='home-navigation'>
            <Link to={{ pathname: '/home/questions', state: { from: history.location } }}>
                <Card>
                    <span>Questions To Answer</span>
                </Card>
            </Link>
            <Link to={{ pathname: '/home/answered', state: { from: history.location } }}>
                <Card>
                    <span>Answered Questions</span>
                </Card>
            </Link>
        </div>
        <div className='home-content'>
            {children}
        </div>
    </Page>);
};

export default Home;