import { CirclePicker } from "react-color";
import { Component } from "react";
import history from "../../history";

class TeamInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            color:"",
        }

        this.colorChange = this.colorChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            name:"",
            color:"",
        });

        history.push(`/set-up/${ this.props.nextRoute }`);
        
        this.props.handleAddTeam({ ...this.state });
    }

    render() {

        let filledIn = this.props.filledIn;

        return(
            <div>
                <h1>Team { this.props.teamInput }</h1>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="team-name">Name:</label>
                    <input
                        id="team-name"
                        type="text"
                        onChange={ this.nameChange }
                        required
                    >
                    </input>
                    <CirclePicker color={ this.state.color } onChange={ this.colorChange }/>
                    <button>{ filledIn ? "update" : "add team" }</button>
                </form>
            </div>
        );
    }
}

export default TeamInput;