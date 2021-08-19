import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
