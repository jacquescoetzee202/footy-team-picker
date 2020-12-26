import TeamInput from "./TeamInput";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTeam: (data) => console.log(data),
    };
};

export default connect(null,mapDispatchToProps)(TeamInput);