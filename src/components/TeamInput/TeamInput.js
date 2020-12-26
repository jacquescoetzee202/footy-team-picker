import { CirclePicker } from "react-color";
import { Component } from "react";

class TeamInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            color:"",
        }

        this.colorChange = this.colorChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    colorChange(color, event) {
        this.setState({
            color: color.hex,
        })
    }

    nameChange(event) {
        this.setState({
            name: event.currentTarget.value
        })
    }

    handleClick(event) {
        event.preventDefault();
        
        this.props.handleAddTeam({ ...this.state });
        
        this.setState({
            name:"",
            color:"",
        });
    }

    render() {
        return(
            <div>
                <h1>Team { this.props.teamInput }</h1>
                <form>
                    <label htmlFor="team-name">Name:</label>
                    <input
                        id="team-name"
                        type="text"
                        onChange={ this.nameChange }
                    >
                    </input>
                </form>
                <CirclePicker color={ this.state.color } onChange={ this.colorChange }/>
                <button onClick={ this.handleClick }>Add team</button>
            </div>
        );
    }
}

export default TeamInput;