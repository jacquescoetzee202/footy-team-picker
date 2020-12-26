import PlayerInput from "./PlayerInput";

import { connect } from "react-redux";

import { incrementPlayerNum } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        playerQty: state.playerQty,
        detailedSetUp: state.detailed,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        incrementPlayers: (increment) => dispatch( incrementPlayerNum( increment ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(PlayerInput);