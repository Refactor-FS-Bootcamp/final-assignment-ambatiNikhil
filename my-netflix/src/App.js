
import './App.css';
import LoginPage from './components/LoginPage';
import SignInPage from './components/SignInPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Comment from './components/Comment';
// import AdminPage from './components/AdminPage';
import CommentList from './components/Admin';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <h1>CMS Project</h1>
      <Router>
        <Switch>

          <Route path="/" exact component={SignInPage} />
          <Route path="/login" component={LoginPage} />
          <Route path ="/admin" component={Admin}/>
          <Route path = "/comments" component={Comment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
