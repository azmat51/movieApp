import React from 'react';
import Search from './search';
import Movielist from './movielist';
import axios from "axios";


class Movies extends React.Component{
    constructor(props){
        super(props)
        this.state={
        apimovies: []
        }
    this.searchData = this.searchData.bind(this);
 
    }


    searchData=(data) => {
   this.getSearchedData(data);
    }


    getSearchedData(movie){
        let api = "https://api.themoviedb.org/3/search/movie?api_key=a85af911f6b6e818a76f4c25c1e541f3&language=en-US&include_adult=false&query=" + movie;
        axios.get(api).then((res)=>{
            //on success
            this.setState({apimovies:res.data.results})
            
            }).catch((error)=>{
            //on error
            });
   
    }

    render(){
        console.log(JSON.stringify(this.props.location.pathname));
        return(
            <div>
            <Search getChildData = {this.searchData}/>
            <Movielist value={this.state.apimovies} path={this.props.location.pathname} />
            
            </div>
           
        )
    }
}
export default Movies;