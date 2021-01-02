import { Component } from "react";

import { pageNames } from "../../data/routes";

import { ReactComponent as Next } from "../../assets/svg/next-page-filled.svg";

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
                <button onClick={ this.prevClick } disabled={ this.props.currentStage === 1 }>
                    <Next className="nav-arrows__prev"/>
                </button>
                <div className="nav-arrows__text-box">
                    <h2 className="nav-arrows__text-box__text">{ currentPage }</h2>
                </div>
                <button onClick={ this.nextClick } disabled={ this.props.currentStage === 5 }>
                    <Next className="nav-arrows__next"/>
                </button>
            </div>
        );
    }
}

export default NavArrows;