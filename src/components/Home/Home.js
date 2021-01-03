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
            <div className="home card">
                <p className="home__text1">Team Picker - pain free team selection from 2-on-2 to full 11-a-side.</p>
                <p className="home__text2">Input your team names along with a list of players and the app does the rest. Once created go back edit and re-sort your teams randomly or on ability.</p>
                <p className="home__text2">Dig a little deeper and interigate the <a href="https://github.com/jnc202/footy-team-picker" target="__blank">code</a> behind the app.</p>
                <button className="home__button button" onClick={ this.handleClick }>{ buttonText }</button>
            </div>
        );
    }
}

export default Home;