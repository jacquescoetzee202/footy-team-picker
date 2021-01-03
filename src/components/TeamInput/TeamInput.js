import { CirclePicker } from "react-color";
import { Component } from "react";
import history from "../../history";
import Kit from "../KitFill";

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
                <form className="team-card__form" onSubmit={ this.handleSubmit }>
                    <input
                        id="team-name"
                        type="text"
                        onChange={ this.nameChange }
                        required
                        placeholder="Team name..."
                        className="team-card__form__input card__sub"
                    >
                    </input>
                    <div className="team-card__form__color card__sub">
                        <CirclePicker 
                            className="team-card__form__color__picker" 
                            color={ this.state.color } 
                            onChange={ this.colorChange }
                            colors={["#ef0505","#33cc33","#2605ef","#ffabab","#c005ef","#000","#e6e600","#9999ff","#cc6600"]}
                            width={"180px"}
                            circleSize={32}
                        />
                        <Kit 
                            color={ this.state.color }
                        />
                    </div>
                    <button className="button">{ filledIn ? "update" : "add team" }</button>
                </form>
            </div>
        );
    }
}

export default TeamInput;