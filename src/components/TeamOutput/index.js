import TeamOutput from "./TeamOutput";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {

    return {
        random: state.randomSort,
    }
}

export default connect( mapStateToProps )(TeamOutput);