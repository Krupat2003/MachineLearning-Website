// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Pages from './components/Pages';
import Shop from './components/Shop';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='nav-bar'>
          <img src='https://img.freepik.com/premium-vector/abstract-business-logo-blue-orange-geometric-double-arrow-origami-initial-letter-s_740796-796.jpg' alt='logo' />
          <ul>
            <li>
              <Link to="/"><a>Home</a></Link>
            </li>
            <li>
              <Link to="/about"><a>About</a></Link>
            </li>
            <li>
              <Link to="/pages"><a>Features </a></Link>
            </li>
            <li>
              <Link to="/shop"><a>Services</a></Link>
            </li>
            <li>
              <Link to="/blog"><a>Blog</a></Link>
            </li>
            <li>
              <Link to="/contact"><a>Contact</a></Link>
            </li>
            <li>
              <Link> <a href='#'><i class="fa-solid fa-cart-shopping"></i></a></Link>
            </li>
          </ul>
          <div className='btn'>
            <button type='ssubmit' className="btn1">SUPPORT</button>
            <button type='ssubmit' className="btn2">LOGIN</button>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pages" component={Pages} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
