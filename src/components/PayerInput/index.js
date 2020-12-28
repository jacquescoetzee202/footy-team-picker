import PlayerInput from "./PlayerInput";

import { connect } from "react-redux";

import { incrementPlayerNum, savePlayers } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        playerQty: state.playerQty,
        detailedSetUp: state.detailed,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        incrementPlayers: (increment) => dispatch( incrementPlayerNum( increment ) ),
        submitPlayers: (data) => dispatch( savePlayers( data ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(PlayerInput);