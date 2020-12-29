import TeamInput from "./TeamInput";

import { connect } from "react-redux";

import { addTeam } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        teamInput: 2,
        nextRoute: "players", 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(addTeam( data, 2 )),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(TeamInput);