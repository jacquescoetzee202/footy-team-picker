import { Component } from "react";
import ButtonGroup from "../ButtonGroup";

class PlayerInput extends Component {

    constructor(props){
        super(props);

        let stateObj = {};

        for (let i = 1 ; i <= this.props.playerQty; i += 1 ){
            stateObj[`player_${i}`] = { name:"", active: true };
        }

        this.state = stateObj;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    handleAdd() {
        // add in the two new players to component local class state
        let { playerQty } = this.props;
        let key1 = `player_${ playerQty + 1 }`;
        let key2 = `player_${ playerQty + 2 }`;
        this.setState({ 
            [ key1 ] : { name: "", active: true },
            [ key2 ] : { name: "", active: true },
        });
        //update app state increasing number of players by 2
        this.props.incrementPlayers(2);
    }

    handleSubtract() {
        //update app state decreasing number of players by 2
        this.props.incrementPlayers(-2);
        //set the last two player inputs active property to false to demonstrate they are no longer in the display
        let { playerQty } = this.props;
        let key1 = `player_${ playerQty - 1 }`;
        let key2 = `player_${ playerQty }`;
        this.setState({ 
            [ key1 ] : { name: "", active: false },
            [ key2 ] : { name: "", active: false },
        });
    }

    nameChange(event) {
        let ref = event.currentTarget.id;
        let name = event.currentTarget.value;
        this.setState({ [ ref ] : { name: name, active: true }});
    }

    ratingClick(event) {
        let selected = event.currentTarget.dataset.rating;
        console.log(selected);
    }

    render() {
        let { playerQty } = this.props;

        // creating an array of 1 -> total number of players to map over in JSX return statement
        let playerInputs = [];
        for (let i = 1 ; i <= playerQty; i += 1 ){
            playerInputs.push(i);
        }

        let addDisable = playerQty > 20 ? true : false;
        let subtractDisable = playerQty < 4 ? true : false;

        return(
            <>
                <ul>
                    { playerInputs.map(( index ) => (
                            <li key={ index }>
                                Player { index }
                                <form>
                                    <label htmlFor={`player_${index}`}>Name:</label>
                                    <input
                                        id={`player_${index}`}
                                        type="text"
                                        onChange={ this.nameChange }
                                        value={ this.state[`player_${index}`].name }
                                    >
                                    </input>
                                </form>
                                <ButtonGroup handleClick={ this.ratingClick } selected={ 1 }/>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={ this.handleAdd } disabled={ addDisable }>Add players</button>
                <button onClick={ this.handleSubtract } disabled={ subtractDisable }>Remove players</button>
            </>
        );
    }
}

export default PlayerInput;