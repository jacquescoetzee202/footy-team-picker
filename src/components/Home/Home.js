import { Component } from "react";

import history from "../../history";

class Home extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 

        if (this.props.inProgress) {
            history.push("/set-up/team1");
            this.props.reset();
        } else {
            history.push("/set-up/team1");
            this.props.start();
        }
    }

    render() {
        const { inProgress } = this.props;

        const buttonText = inProgress ? "restart" : "start";

        return (
            <>
                <p>Some info on the start page</p>
                <button onClick={ this.handleClick }>{ buttonText }</button>
            </>
        );
    }
}

export default Home;