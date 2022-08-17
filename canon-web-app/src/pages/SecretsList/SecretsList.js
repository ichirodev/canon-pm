import { useState } from 'react';
import Secret from '../../components/Secret/Secret';

import './SecretsList.css';

function SecretsList({color, searchFilter}) {
    // eslint-disable-next-line
    const [secrets, setSecrets] = useState([]);

    const renderSecrets = () => {
        if (secrets.length <= 0) {
            return (
                <>
                <h1 className={color + '-text'}>There is nothing here...</h1>
                <h3 className={color + '-text'}>Start by creating a new secret by pressing the add button</h3>
                </>
            );
        }

        return secrets.map((secret, index) => {
            if (secret.secretName.includes(searchFilter)) {
                return <Secret key={"secret" + index} color={color} objectData={secret}/>
            }
            return null;
        });
    }

    return (
        <div className='secrets-list'>
            {renderSecrets()}
        </div>
    );
}

export default SecretsList;