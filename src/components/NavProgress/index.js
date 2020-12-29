import NavProgress from "./NavProgress";

import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        progress: state.progress,
    }
}

export default connect( mapStateToProps )(NavProgress);