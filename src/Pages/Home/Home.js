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
                    Questions To Answer
                </Card>
            </Link>
            <Link to={{ pathname: '/home/answered', state: { from: history.location } }}>
                <Card>
                    Answered Questions
                </Card>
            </Link>
        </div>
        {children}
    </Page>);
};

export default Home;