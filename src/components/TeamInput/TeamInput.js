import { CirclePicker } from "react-color";
import { Component } from "react";

class TeamInput extends Component {
    constructor() {
        super();

        this.state = {
            name:"",
            color:"",
        }

        this.colorChange = this.colorChange.bind(this);
    }

    colorChange(color, event) {
        this.setState({
            color: color.hex,
        })
    }

    render() {
        return(
            <div>
                <h1>Team 1</h1>
                <form>
                    <label htmlFor="team-name">Name:</label>
                    <input
                        id="team-name"
                        type="text"
                    >
                    </input>
                </form>
                <CirclePicker color={ this.state.color } onChange={ this.colorChange }/>
                <button>Add team</button>
            </div>
        );
    }
}

export default TeamInput;