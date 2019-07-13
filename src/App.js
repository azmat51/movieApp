import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Movies from './components/movies';
import Footer from './components/footer';
import MyMovies from './components/myMovies';


function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
    <Route exact path="/" component={Movies}></Route>
    <Route path="/myMovies" component={MyMovies}></Route>
     <Footer/>
     </Router> 
    </div>
  );
}

export default App;
