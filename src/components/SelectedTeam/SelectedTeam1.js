import SelectedTeam from "./SelectedTeam";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    let { team1 } = state;
    return {
        teamObj: team1,
    }
}

export default connect( mapStateToProps )(SelectedTeam);