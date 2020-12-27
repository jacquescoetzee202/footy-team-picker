import { Component } from "react";

class PlayerInput extends Component {

    constructor(){
        super();

        this.state = {
            player_1: {},
            player_2: {},
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    handleAdd() {
        this.props.incrementPlayers(2);
    }

    handleSubtract() {
        this.props.incrementPlayers(-2);
    }

    nameChange(event) {
        let ref = event.currentTarget.id;
        let name = event.currentTarget.value;
        this.setState({ [ ref ] : { name: name }});
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
                                    >
                                    </input>
                                </form>
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