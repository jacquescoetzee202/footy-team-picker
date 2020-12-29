import { Component } from "react";

import history from "../../history";

class Home extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        history.push("/set-up/team1");
    }

    render() {
        return (
            <>
                <p>Some info on the start page</p>
                <button onClick={ this.handleClick }>Start</button>
            </>
        );
    }
}

export default Home;