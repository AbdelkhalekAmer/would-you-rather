import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/index';
import NotFound from './Pages/NotFound/NotFound';
import NewQuestion from './Pages/NewQuestion/NewQuestion';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';

const App = () => {
  return (<Switch>
    <Route exact path='/Login' render={() => <LandingPage />} />
    <PrivateRoute exact path={['/', '/Home', '/Home/Questions-to-answer']} component={Home.QuestionsToAnswer} />
    <PrivateRoute exact path={['/', '/Home/Answered-questions']} component={Home.AnsweredQuestions} />
    <PrivateRoute exact path='/New-question' component={NewQuestion} />
    <PrivateRoute exact path='/Leader-board' component={LeaderBoard} />
    <Route path='*' render={() => <NotFound />} />
  </Switch>
  );
};

export default App;
