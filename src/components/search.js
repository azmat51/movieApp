import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();

        this.movieClick = this.movieClick.bind(this);
        this.sendData=this.sendData.bind(this);
    }

movieClick(e){
    e.preventDefault();
    this.sendData(this.myRef.current.value);
}


sendData=(value)=>{
this.props.getChildData(value)

}

    render(){
        return(
            <div>
                <div className="container">
                <div className="col-6 col-md-6 mx-auto text-center">
            <form className="form-inline w-100">
  <div className="form-group mb-2">
    <label className="sr-only">Email</label>
    <input type="text" className="form-control-plaintext" id="staticEmail2" />
  </div>
  <div className="form-group mx-sm-3 mb-2 w-100">
    <label className="sr-only">Type Movie Name</label>
    <input  ref = {this.myRef} type="text" className="form-control w-100"  placeholder="Text"/>
    <button type="submit" className="btn btn-primary mb-2 search-btn" onClick={this.movieClick}>Search</button>
  </div>
</form></div>
</div>
</div>

        )
    }
}
export default Search;