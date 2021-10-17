import './Home.css';
import Page from '../Page';
import Card from '../../Components/UI/Card/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllQuestions } from '../../Store/question-actions';
import { useEffect } from 'react';

const Home = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllQuestions()), [dispatch]);

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