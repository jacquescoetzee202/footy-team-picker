import SelectedTeam1 from '../SelectedTeam/SelectedTeam1';
import SelectedTeam2 from '../SelectedTeam/SelectedTeam2';

const TeamOutput = ({ random, sortClick, randomClick }) => (
    <div className="card team-output-card">
        <SelectedTeam1 />
        <SelectedTeam2 />
        <div className="button-pair">
            <button onClick={ sortClick } className={`button-pair__btn button ${!random ? "selected-sort" : ""}`} disabled={ !random }>Equal</button>
            <button onClick={ randomClick } className={`button-pair__btn button ${random ? "selected-sort" : ""}`}>Random</button>
        </div>
    </div>
)

export default TeamOutput;