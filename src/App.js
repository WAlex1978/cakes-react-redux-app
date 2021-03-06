import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class App extends Component {
  render() {
    return (
        <Router>
            <Banner />
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route path='/cart' component={Cart} />
            <Footer />
        </Router>
    );
  }
}

export default App;
