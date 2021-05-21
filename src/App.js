import './App.css';
import EditProfile from './components/EditProfile';
import Header from './components/Header';
import Profile from './components/Profile';
import UserHistory from './components/UserHistory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/" exact component={Profile} />
      <Route path="/users-list" component={UserHistory} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
