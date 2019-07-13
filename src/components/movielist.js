import React from 'react';
import Movie from './movie';

class Movielist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checkInfo :''
          }
                    
   // console.log("gg" + props.value);
    }

    componentDidMount(){
    //  console.log(JSON.stringify(this.props.value));
    }
    componentWillReceiveProps(props){
        this.setState({
            checkInfo:this.props.check
        })
    }
    newmehod(){
        this.props.gtmethod()
    }

    render(){
       
        
        return(
            <div className="container">
                <div className="row mt-2 mb-2">
            {this.props.value.map((movie,index)=>{
                return(
                <div key={index} className="col-4">
                <Movie  key={index} child ={movie} det={this.state.checkInfo} flag={this.props.path} ptmethod={()=>{this.newmehod()}}/>
                </div>
                );
            })}
            </div>
            </div>
        )
    }
}
export default Movielist;