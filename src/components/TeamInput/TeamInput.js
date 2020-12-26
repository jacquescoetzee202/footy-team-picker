import { CirclePicker } from "react-color";
import { Component } from "react";

class TeamInput extends Component {
    constructor() {
        super();

        this.state = {
            name:"",
            color:"",
        }
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
                    <button>Add team</button>
                </form>
                <CirclePicker/>
            </div>
        );
    }
}

export default TeamInput;