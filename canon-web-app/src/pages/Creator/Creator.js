import NewSecret from '../../components/NewSecret/NewSecret';
import './Creator.css';

function Creator({color}) {
    return (
        <div className="creator-container">
            <NewSecret color={color}/>
            <NewSecret color={color}/>
        </div>
    );
}

export default Creator;