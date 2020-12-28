import SelectedTeam1 from '../SelectedTeam/SelectedTeam1';
import SelectedTeam2 from '../SelectedTeam/SelectedTeam2';

const TeamOutput = ({ random }) => (
    <>
        <SelectedTeam1 />
        <SelectedTeam2 />
        <button className={ !random ? "selected" : null }>Equaly matched teams</button>
        <button className={ random ? "selected" : null }>Random teams</button>
    </>
)

export default TeamOutput;