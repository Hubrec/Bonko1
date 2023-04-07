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
import Index from '../pages/index/Index';
import NewAnnounce from '../pages/NewAnounces/NewAnnounce';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li className='login-nav'>
            <Link to="/login">Login</Link>
          </li>
          <li className='register-nav'>
            <Link to="/register">Register</Link>
          </li>
          <li className='home-nav'>
            <Link to="/">Announces</Link>
          </li>
          <li className='announce-nav'>
            <Link to="/new">New announce</Link>
          </li>
          <li className='profile-nav'>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/'} element={<Index />} />
        <Route path={'/profile'} element={<Mock />} />
        <Route path={'/new'} element={<NewAnnounce />} />
      </Routes>    
    </Router>
  );
}

export default App;