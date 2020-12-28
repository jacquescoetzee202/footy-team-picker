import TeamOutput from "./TeamOutput";

import { connect } from "react-redux";

import { toggleSort } from "../../data/actions/state";

const mapStateToProps = ( state ) => {

    return {
        random: state.randomSort,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        sortClick: () => dispatch(toggleSort()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(TeamOutput);