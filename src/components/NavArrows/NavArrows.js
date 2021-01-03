import { Component } from "react";

import { pageNames } from "../../data/routes";

import Next from "../Next";

class NavArrows extends Component {
    
    constructor(props) {
        super(props);

        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.nextArrowState = this.nextArrowState.bind(this);
    }
    
    nextClick() {
        console.log("next");
        this.props.navArrowClick(1);
    }
    
    prevClick() {
        console.log("prev");
        this.props.navArrowClick(-1);
    }

    nextArrowState(currentStage, progress) {
        if( currentStage === 1 ){
            return true;
        }
        if( currentStage === 2 ){
            return progress.team1;
        }
        if( currentStage === 3 ){
            return progress.team2;
        }
        if( currentStage === 4 ){
            return progress.players;
        }
        if( currentStage === 5 ){
            return false;
        }
    }
    
    render() {
        let { currentStage, progress } = this.props;
        let currentPage = pageNames[ currentStage -1 ];

        return (
            <div className="nav-arrows">
                <button className="nav-arrows__button" onClick={ this.prevClick } disabled={ currentStage === 1 }>
                    <Next css={`nav-arrows__prev ${ currentStage === 1 ? "disabled-arrow" : ""}`}/>
                </button>
                <div className="nav-arrows__text-box">
                    <h2 className="nav-arrows__text-box__text">{ currentPage }</h2>
                </div>
                <button className="nav-arrows__button" onClick={ this.nextClick } disabled={ !this.nextArrowState( currentStage, progress ) }>
                    <Next css={`nav-arrows__next ${!this.nextArrowState( currentStage, progress ) ? "disabled-arrow" : ""}`}/>
                </button>
            </div>
        );
    }
}

export default NavArrows;