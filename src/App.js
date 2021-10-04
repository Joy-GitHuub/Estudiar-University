import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import AllServies from './component/AllServies/AllServies';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import NotFound from './component/NotFound/NotFound'



function App() {
  return (
    <div>

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/home'>
            <Header></Header>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <AllServies></AllServies>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/'>
            <Header></Header>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
