import SelectedTeam from "./SelectedTeam";

import { connect } from "react-redux";

// import { incrementPlayerNum, savePlayers } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    let { team1 } = state;
    return {
        teamObj: team1,
    }
}

export default connect( mapStateToProps )(SelectedTeam);