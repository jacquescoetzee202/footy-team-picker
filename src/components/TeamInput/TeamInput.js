import { CirclePicker } from "react-color";
import { Component } from "react";
import history from "../../history";
import { ReactComponent as KitFill } from "../../assets/svg/shirt-fill.svg";
import { ReactComponent as Kit } from "../../assets/svg/shirt.svg";

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
            <div className="team-card card">
                <h2>Team { this.props.teamInput }</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="team-name">Name:</label>
                    <input
                        id="team-name"
                        type="text"
                        onChange={ this.nameChange }
                        required
                    >
                    </input>
                    <div className="team-card__color card__sub">
                        <CirclePicker color={ this.state.color } onChange={ this.colorChange }/>
                        <KitFill />
                    </div>
                    <button className="button">{ filledIn ? "update" : "add team" }</button>
                </form>
            </div>
        );
    }
}

export default TeamInput;