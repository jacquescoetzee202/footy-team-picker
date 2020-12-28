import SelectedTeam from "./SelectedTeam";

import { connect } from "react-redux";

// import { incrementPlayerNum, savePlayers } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    let { team2 } = state;
    return {
        teamObj: team2,
    }
}

export default connect( mapStateToProps )(SelectedTeam);