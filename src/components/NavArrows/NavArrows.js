import { Component } from "react";

class NavArrows extends Component {
    
    constructor(props) {
        super(props);

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
                <button onClick={ this.prevClick } disabled={ this.props.currentStage === 1 }>previous</button>
                <button onClick={ this.nextClick } disabled={ this.props.currentStage === 5 }>next</button>

            </>
        );
    }
}

export default NavArrows;