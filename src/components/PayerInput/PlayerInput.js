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
                <button onClick={ this.handleAdd }>Add players</button>
                <button onClick={ this.handleSubtract }>Remove players</button>
            </>
        );
    }
}

export default PlayerInput;