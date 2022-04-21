import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Main';
import Terms from './Components/Terms';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/terms' component={Terms}/>
        <Route exact path='/' component={Main}/>
      </switch> 
    </Router>

  );
}

export default App;
