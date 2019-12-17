import React,{ Component } from 'react';

class Search extends Component {
    render(){
        return(
            <div className="searchbar mr-3">
                <input className="search_input" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
            </div>
        )
    }
}

export default Search;