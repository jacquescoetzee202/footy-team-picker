import Header from "./Header";

import { connect } from "react-redux";

import { updateNavStage, stateReset } from "../../data/actions/state";

import history from "../../history";

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            history.push("/")
            dispatch( stateReset() )
        },
        linkClick: (event) => {
            let route = event.currentTarget.dataset.route;
            history.push( route );
            dispatch(updateNavStage())
        },
    }
};

export default connect( null , mapDispatchToProps )(Header);