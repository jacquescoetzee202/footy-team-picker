import NavProgress from "./NavProgress";

import { connect } from "react-redux";

import history from "../../history";

import { updateNavStage } from "../../data/actions/state";

const mapStateToProps = ( state ) => {
    return {
        progress: state.progress,
        currentStage: +state.currentStage,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        linkClick: (event) => {
            let route = event.currentTarget.dataset.route;
            history.push( route );
            dispatch(updateNavStage());
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(NavProgress);