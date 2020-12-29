import TeamOutput from "./TeamOutput";

import { connect } from "react-redux";

import { equalSort, randomSort } from "../../data/actions/state";

const mapStateToProps = ( state ) => {

    return {
        random: state.randomSort,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        sortClick: () => dispatch(equalSort()),
        randomClick: () => dispatch(randomSort()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(TeamOutput);