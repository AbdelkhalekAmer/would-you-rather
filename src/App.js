import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/index';
import NotFound from './Pages/NotFound/NotFound';
import NewQuestion from './Pages/NewQuestion/NewQuestion';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import QuestionPage from './Pages/Question/QuestionPage';
import AnsweredQuestionPage from './Pages/Question/AnsweredQuestionPage';

const App = () => {
  return (<Switch>
    <Route exact path='/Login' render={() => <LandingPage />} />
    <PrivateRoute exact path={['/', '/home', '/home/questions']} component={Home.QuestionsToAnswer} />
    <PrivateRoute exact path={['/questions/:questionId']} component={QuestionPage} />
    <PrivateRoute exact path={['/home/answered']} component={Home.AnsweredQuestions} />
    <PrivateRoute exact path={['/question/:questionId']} component={AnsweredQuestionPage} />
    <PrivateRoute exact path='/add' component={NewQuestion} />
    <PrivateRoute exact path='/leaderboard' component={LeaderBoard} />
    <Route path='*' render={() => <NotFound />} />
  </Switch>
  );
};

export default App;
