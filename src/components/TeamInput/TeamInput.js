import { CirclePicker } from "react-color";

const TeamInput = () => (
    <div>
        <h1>Team 1</h1>
        <form>
            <label htmlFor="team-name">Name:</label>
            <input
                id="team-name"
                type="text"
            >
            </input>
            <button>Add team</button>
        </form>
        <CirclePicker/>
    </div>
);

export default TeamInput;