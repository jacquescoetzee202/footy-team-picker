import SelectedTeam from "./SelectedTeam";

import { connect } from "react-redux";

// import { incrementPlayerNum, savePlayers } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    let { players, team1, team2 } = state;
    return {
        players,
        team1,
        team2,
    }
}

export default connect( mapStateToProps )(SelectedTeam);