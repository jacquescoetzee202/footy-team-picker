import { Component } from "react";

class NavArrows extends Component {
    
    constructor() {
        super();

        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
    }
    
    nextClick() {
        console.log("next");
    }

    prevClick() {
        console.log("next");
    }
    
    render() {
        return (
            <>
                <button onClick={ this.nextClick }>Prev</button>
                <button onClick={ this.prevClick }>Next</button>
            </>
        );
    }
}

export default NavArrows;