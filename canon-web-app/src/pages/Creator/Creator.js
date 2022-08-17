import { useState } from 'react';
import NewSecret from '../../components/NewSecret/NewSecret';
import Separator from '../../components/Separator/Separator';
import './Creator.css';
import {MdAdd} from 'react-icons/md';

function Creator({color}) {
    const [keyCounter, setKeyCounter] = useState(0);
    const [newSecrets, setNewSecrets] = useState(
        [<NewSecret key={keyCounter}/>]
    );
    
    const createNewSecret = () => {
        let newCounter = keyCounter + 1;
        let newTempSecrets = [...newSecrets];
        newTempSecrets.push(<NewSecret key={newCounter}/>)
        setKeyCounter(newCounter);
        setNewSecrets(newTempSecrets);  
    }

    return (
        <div className="creator-container">
            
            {newSecrets}

            <Separator color={color}/>

            <button className={"round-button " + color + "-button"}
            onClick={() => {createNewSecret()}} >
              <MdAdd size={"30px"}/>
            </button>
        </div>
    );
}

export default Creator;