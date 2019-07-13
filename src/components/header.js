import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    //     constructor(props){
    //     super(props)
    // }
    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light header-bg">
  <a className="navbar-brand style-color" >ReactMovies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to={{pathname: "/"}} className="nav-link style-color" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to= {{pathname: "/myMovies"}} className="nav-link style-color" >MyMovies</Link>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
        )
    }
}
export default Header;