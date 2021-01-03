import { Component } from "react";
import ButtonGroup from "../ButtonGroup";
import history from "../../history";

class PlayerInput extends Component {

    constructor(props){
        super(props);

        let stateObj = {};

        for (let i = 1 ; i <= this.props.playerQty; i += 1 ){
            stateObj[`player_${i}`] = { name:"", active: true, rating: 0 };
        }

        this.state = stateObj;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ratingClick = this.ratingClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAdd(event) {
        event.preventDefault();
        // add in the two new players to component local class state
        let { playerQty } = this.props;
        let key1 = `player_${ playerQty + 1 }`;
        let key2 = `player_${ playerQty + 2 }`;
        this.setState({ 
            [ key1 ] : { name: "", active: true, rating: 0 },
            [ key2 ] : { name: "", active: true, rating: 0 },
        });
        //update app state increasing number of players by 2
        this.props.incrementPlayers(2);
    }

    handleSubtract(event) {
        event.preventDefault();
        //update app state decreasing number of players by 2
        this.props.incrementPlayers(-2);
        //set the last two player inputs active property to false to demonstrate they are no longer in the display
        let { playerQty } = this.props;
        let key1 = `player_${ playerQty - 1 }`;
        let key2 = `player_${ playerQty }`;
        this.setState({ 
            [ key1 ] : { name: "", active: false, rating: 0 },
            [ key2 ] : { name: "", active: false, rating: 0 },
        });
    }

    nameChange(event) {
        let ref = event.currentTarget.id;
        let name = event.currentTarget.value;
        this.setState({ [ ref ] : { name: name, active: true, rating: +this.state[ ref ].rating }});
    }

    ratingClick(event) {
        event.preventDefault();
        let selected = event.currentTarget.dataset.rating;
        let ref = event.currentTarget.dataset.id;

        this.setState({ [ ref ] : { ...this.state[ ref ], rating: +selected }});
    }

    handleSubmit(event) {
        event.preventDefault();

        let currentState = this.state;

        let playerArray = [];

        for (const playerKey in currentState) {
            let player = currentState[playerKey];

            if (player.active) {
                playerArray.push(player);
            }
        }

        history.push("/teams");

        this.props.submitPlayers(playerArray);
    }

    render() {
        let { playerQty, filledIn } = this.props;

        // creating an array of 1 -> total number of players to map over in JSX return statement
        let playerInputs = [];
        for (let i = 1 ; i <= playerQty; i += 1 ){
            playerInputs.push(i);
        }

        let addDisable = playerQty > 20 ? true : false;
        let subtractDisable = playerQty < 4 ? true : false;

        return(
            <>
                <form className="card" onSubmit={ this.handleSubmit }>
                    <ul className="card__ul">
                        { playerInputs.map(( index ) => (
                                <li className="card__ul__li card__sub" key={ index }>
                                    <label className="card__ul__li__label" htmlFor={`player_${index}`}>player { index } name</label>
                                    <input
                                        className="card__ul__li__input"
                                        required
                                        id={`player_${index}`}
                                        type="text"
                                        onChange={ this.nameChange }
                                        value={ this.state[`player_${index}`].name }
                                    >
                                    </input>
                                    <ButtonGroup 
                                        handleClick={ this.ratingClick }
                                        selected={ this.state[`player_${index}`].rating }
                                        id={`player_${index}`}
                                        skill="skill"
                                        className="card__ul__li__button-group"
                                        />
                                </li>
                            ))
                        }
                    </ul>
                    <div className="button-pair">
                        <button className="button button-pair__btn" onClick={ this.handleAdd } disabled={ addDisable }>Add players</button>
                        <button className="button button-pair__btn" onClick={ this.handleSubtract } disabled={ subtractDisable }>Remove players</button>
                    </div>
                    <button className="submit button">{ filledIn ? "re-submit" : "submit" }</button>
                </form>
            </>
        );
    }
}

export default PlayerInput;