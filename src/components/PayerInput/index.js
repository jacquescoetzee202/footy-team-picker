import PlayerInput from "./PlayerInput";

import { connect } from "react-redux";

//  import { addTeam } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        playerQty: state.playerQty,
        detailedSetUp: state.detailed,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        incrementPlayers: (increment) => console.log(increment),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(PlayerInput);