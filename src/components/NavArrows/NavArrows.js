import { Component } from "react";

import { pageNames } from "../../data/routes";

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
        let currentPage = pageNames[ this.props.currentStage -1 ];

        return (
            <div className="nav-arrows">
                <button onClick={ this.prevClick } disabled={ this.props.currentStage === 1 }>previous</button>
                <h2>{ currentPage }</h2>
                <button onClick={ this.nextClick } disabled={ this.props.currentStage === 5 }>next</button>
            </div>
        );
    }
}

export default NavArrows;