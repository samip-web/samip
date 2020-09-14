import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './page/Navbar';
import Error from './page/Error';
import About from './page/About';
import Contact from './page/Contact';
import Register from './page/Register';
import './App.css';
import Footer from './page/Footer';

const App =() => {
  return (
    <section className="App">

    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/register" component={Register} />
      <Route path="/Error" component={Error} />
      <Redirect to="/" />
    </Switch>

     <Footer />


</section>
);
}

export default App;
