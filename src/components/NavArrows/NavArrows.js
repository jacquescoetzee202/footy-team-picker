import { Component } from "react";

class NavArrows extends Component {
    
    constructor() {
        super();

        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
    }
    
    nextClick() {
        console.log("next");
        this.props.navArrowClick(1);
    }
    
    prevClick() {
        console.log("prev");
        this.props.navArrowClick(-1);
    }
    
    render() {
        return (
            <>
                <button onClick={ this.nextClick }>next</button>
                <button onClick={ this.prevClick }>previous</button>
            </>
        );
    }
}

export default NavArrows;