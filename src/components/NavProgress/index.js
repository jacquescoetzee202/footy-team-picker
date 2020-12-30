import NavProgress from "./NavProgress";

import { connect } from "react-redux";

import history from "../../history";

const mapStateToProps = ( state ) => {
    return {
        progress: state.progress,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        linkClick: (event) => {
            let route = event.currentTarget.dataset.route;
            dispatch();
            history.push( route );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(NavProgress);