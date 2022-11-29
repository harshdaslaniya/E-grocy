import Navbar from './component/Navbar';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import About from './component/About';
import Footer from './component/Footer';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Dashboard></Dashboard>}/>
      <Route exact path="/login" element={<Login></Login>}/>
      </Routes>
      
      <div>
      <Footer></Footer>
      </div>
    </Router>
    </>
  );
}

export default App;

