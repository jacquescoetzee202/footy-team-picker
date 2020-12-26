import PlayerInput from "./PlayerInput";

import { connect } from "react-redux";

//  import { addTeam } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        playerQty: state.playerQty,
        detailedSetUp: state.detailed,
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(),
    };
};
*/

export default connect( mapStateToProps )(PlayerInput);