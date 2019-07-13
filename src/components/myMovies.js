import React from 'react';
import axios from "axios";
import Movielist from './movielist';

class MyMovies extends React.Component{
    constructor(props){
        super(props)
        this.state={
mymovies :[],

        }
        }
    
        componentDidMount() {
            this.getFavMovies()
            }

        getFavMovies(){
            axios.get('http://localhost:3004/movies')
            .then((response) =>{
              this.setState({
                  mymovies:response.data,
                  checktype:"delete"
              })
            })
            .catch((error)=>{

            });
        }

    render(){
        console.log(JSON.stringify(this.props.location));
        let movies;
        if(this.state.mymovies.length>0){
            movies=(
                <div>
                 <Movielist value={this.state.mymovies} path={this.props.location.pathname} gtmethod={()=>{this.getFavMovies()}} />
                 
                </div>
               
            )
        }

        return(
            <div>{movies}</div>
        )
    }
}
export default MyMovies;