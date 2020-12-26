import TeamInput from "./TeamInput";

import { connect } from "react-redux";

import { addTeam1 } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => dispatch(addTeam1(data)),
    };
};

export default connect(null,mapDispatchToProps)(TeamInput);