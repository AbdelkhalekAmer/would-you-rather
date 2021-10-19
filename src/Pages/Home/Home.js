import './Home.css';
import Page from '../Page';
import Card from '../../Components/UI/Card/Card';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllQuestions } from '../../Store/question-actions';
import { useEffect } from 'react';

const Home = ({ children }) => {
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllQuestions()), [dispatch]);

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