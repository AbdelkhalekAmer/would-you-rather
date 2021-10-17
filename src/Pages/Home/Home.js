import './Home.css';
import Page from '../Page';
import Card from '../../Components/UI/Card/Card';
import { Link } from 'react-router-dom';

const Home = ({ children }) => {
    return (<Page>
        <div className='home-navigation'>
            <Link to='/Home/Questions-to-answer'>
                <Card>
                    Questions To Answer
                </Card>
            </Link>
            <Link to='/Home/Answered-questions'>
                <Card>
                    Answered Questions
                </Card>
            </Link>
        </div>
        {children}
    </Page>);
};

export default Home;