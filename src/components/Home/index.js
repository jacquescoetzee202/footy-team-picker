import Home from "./Home";

import { connect } from "react-redux";

import { stateReset, start } from "../../data/actions/state";

const mapStateToProps = ( state ) => {

    const { team1, team2, players } = state.progress;

    return {
        inProgress: team1 || team2 || players,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch( stateReset() ),
        start: () => dispatch( start() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Home);