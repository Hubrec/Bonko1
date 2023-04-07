import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Mock from '../pages/Mock/Mock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Mock />} />
        <Route path={'/login'} element={<Mock />} />
        <Route path={'/profile'} element={<Mock />} />
        <Route path={'/callback'} element={<Mock />} />
      </Routes>    
    </Router>
  );
}

export default App;