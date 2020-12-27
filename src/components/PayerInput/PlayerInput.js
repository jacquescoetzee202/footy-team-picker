import { Component } from "react";

class PlayerInput extends Component {

    constructor(){
        super();

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd() {
        this.props.incrementPlayers(2);
    }

    handleSubtract() {
        this.props.incrementPlayers(-2);
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