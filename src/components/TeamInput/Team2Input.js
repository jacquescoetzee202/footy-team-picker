import TeamInput from "./TeamInput";

import { connect } from "react-redux";

import { addTeam } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        nextRoute: "players",
        filledIn: state.team2.name.length > 0,
        color: state.team2.kit_color,  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(addTeam( data, 2 )),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(TeamInput);