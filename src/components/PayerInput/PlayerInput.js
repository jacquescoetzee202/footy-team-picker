import { Component } from "react";

class PlayerInput extends Component {

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
                            <li>
                                Player { index }
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default PlayerInput;