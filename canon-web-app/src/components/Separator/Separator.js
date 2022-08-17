import './Separator.css';

function Separator({color}) {
    return (
        <hr className={color + "-separator"}/>
    );
}

export default Separator;