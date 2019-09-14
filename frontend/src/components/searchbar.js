import React from 'react'
import {  Link } from "react-router-dom";

class SearchBar extends React.Component {
    render() {

        

        return <div>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />


        </div>
    }
}
export default SearchBar