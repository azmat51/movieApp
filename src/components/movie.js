import React from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            "redirect":false
        }
    }
    addSearchedMovie = (data) => {
        axios.post(`http://localhost:3004/movies`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
this.setState({redirect:true});

      })
      .catch(function(error){
          console.log(error);
      });
  }

  deleteMovie(getId){
      axios.delete(`http://localhost:3004/movies/`+getId).then(res=>{
          console.log(res)
          this.props.ptmethod()
      }).catch(error=>{
          console.log(error);
      })
  }


    render() {
        
        if(this.state.redirect){
// return <Redirect to ='/myMovies'/>
 
        } else{
            
        }
        const imgpath = "https://image.tmdb.org/t/p/w500" + this.props.child.poster_path;
        return (
        
                <div className="card edit-card" >
                    <img src={imgpath} className="card-img-top edit-image" alt="..." />
                    <div className="card-body edit-cardbody">
                        <h5 className="card-title">{this.props.child.title}</h5>
                        <p className="card-text edit-card-text">{(this.props.child.overview.length>70)? this.props.child.overview.substring(1,140):this.props.child.overview}</p>
                        {this.props.flag=="/"? (<button className="btn btn-primary" onClick={()=>this.addSearchedMovie(this.props.child)}>Add</button>):(
                        <button className="btn btn-primary" onClick={()=>this.deleteMovie(this.props.child.id)}>Delete</button>)}
                    </div>
                </div>
        )
    }
}
export default Movie;