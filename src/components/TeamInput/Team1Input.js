import TeamInput from "./TeamInput";

import { connect } from "react-redux";

import { addTeam } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        teamInput: 1,
        nextRoute: "team2",
        filledIn: state.team1.name.length > 0,
        color: state.team1.kit_color,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(addTeam( data, 1 )),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(TeamInput);