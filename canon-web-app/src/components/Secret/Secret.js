import './Secret.css';
import './../../style/colors.css';

import SecretAttribute from './SecretAttribute/SecretAttribute';
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import { useState } from 'react';

function Secret({color, objectData}) {
    const [expanded, setExpanded] = useState(false);
    // eslint-disable-next-line
    const [attributes, setAttributes] = useState(objectData.attributes); 

    const renderAttributes = () => {
        if (attributes.length <= 0) return; 

        return attributes.map((attribute, index) => {
            var isPassword = (attribute.label === "Password" || attribute.label === "password");
            return <SecretAttribute key={"attr" + index} color={color} label={attribute.label} data={attribute.data} isItPassword={isPassword}/>
        })
    }

    return (
        <div className={"secret-container " + color + "-sc"}>
            <div className="secret-title">
                {objectData.secretName}
                <button className={color + "-transparent-button"} onClick={()=>setExpanded(!expanded)}>
                    {expanded ? <MdExpandLess/> : <MdExpandMore/>}    
                </button>
            </div>
            {
                expanded ? renderAttributes() : null
            }
            <div className="secret-options">
                <button className={"button " + color + "-warning-button"}>
                    Delete
                </button>
                <button className={"button " + color + "-button"}>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default Secret;