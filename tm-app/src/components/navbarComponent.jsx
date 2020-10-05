import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    // state = {  }

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    handleTIGERMATCH() {
        console.log("click TM")
    }

    

    render() { 
        return (
            <div>
                {/* <h1>Navbar</h1>
                <span style={this.styles} className="badge badge-primary m-2">TIGERMATCH, My Profile, Filters, Browse Singles, Matches</span> */}
                <ul id="nav">
                <li><button onClick={this.handleTIGERMATCH}><a href="#">TIGERMATCH</a></button></li>
                <li><button onClick={this.handleTIGERMATCH}><a href="#">My Profile</a></button></li>
                <li><button onClick={this.handleTIGERMATCH}><a href="#">Filters</a></button></li>
                <li><button onClick={this.handleTIGERMATCH}><a href="#">Browse Singles</a></button></li>
                <li><button onClick={this.handleTIGERMATCH}><a href="#">Matches</a></button></li>
                <h3><a href="#">Have bug reports or comments? Let us know at tigermatch@princeton.edu</a></h3>
              </ul>
            </div>
         // JSX Element
        );
        
    }
}
 
export default Navbar;