import TeamInput from "./TeamInput";

import { connect } from "react-redux";

import { addTeam1 } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        teamInput: 1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(addTeam1(data)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(TeamInput);