import SelectedTeam from "./SelectedTeam";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    let { team2 } = state;
    return {
        teamObj: team2,
    }
}

export default connect( mapStateToProps )(SelectedTeam);