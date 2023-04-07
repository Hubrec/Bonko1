import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Mock from '../pages/Mock/Mock';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/new">New announce</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/'} element={<Mock />} />
        <Route path={'/profile'} element={<Mock />} />
        <Route path={'/new'} element={<Mock />} />
      </Routes>    
    </Router>
  );
}

export default App;