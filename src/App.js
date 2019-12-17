import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router-dom"

import Header from './Components/header.component';
import Home from './Components/home.component';
import Cart from './Components/cart.component';
import FilterProgress from './Components/filter.component';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div id="layout-content" className="layout-content-wrapper">
          <Header />
          <section className="container-fluid">
          <div className="row" id="body-row">
            <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
              <aside>
                Aside
                <FilterProgress 
                  
                />
              </aside>
            </div>
            <div className="col p-4">
              <Route path="/" exact strict component={Home} />
              <Route path="/cart" exact strict component={Cart} />
            </div>
          </div>
        </section>
        </div>
      </Router>
    );
  }
}

export default App;