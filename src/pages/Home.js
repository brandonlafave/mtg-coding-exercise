import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <div>Hello world</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
