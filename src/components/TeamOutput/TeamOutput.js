import SelectedTeam1 from '../SelectedTeam/SelectedTeam1';
import SelectedTeam2 from '../SelectedTeam/SelectedTeam2';

const TeamOutput = ({ random, sortClick, randomClick }) => (
    <>
        <SelectedTeam1 />
        <SelectedTeam2 />
        <button onClick={ sortClick } className={ !random ? "selected" : null } disabled={ !random }>Equal</button>
        <button onClick={ randomClick } className={ random ? "selected" : null }>Random</button>
    </>
)

export default TeamOutput;