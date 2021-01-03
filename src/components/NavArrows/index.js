import NavArrows from "./NavArrows";

import { connect } from "react-redux";

import { navArrowInc } from "../../data/actions/state";

const mapStateToProps = ( state ) => {

    return {
        currentStage: +state.currentStage,
        progress: state.progress,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        navArrowClick: ( increment ) => dispatch(navArrowInc( increment )),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(NavArrows);