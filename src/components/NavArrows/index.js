import NavArrows from "./NavArrows";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        currentStage: +state.currentStage,
    }
}

export default connect( mapStateToProps )(NavArrows);