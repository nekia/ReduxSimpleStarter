import React, { Component } from 'react';
// import ReactDom from 'react-dom';

class SearchBar extends Component{
    constructor(props){
        super(props);
        
        this.state = { term: '' };
    }
    render(){
        return <input onChange={(event) => console.log(event.target.value)}/>;
    }
}

export default SearchBar;