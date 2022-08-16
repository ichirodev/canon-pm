import { useState } from 'react';
import Secret from '../../components/Secret/Secret';

import './SecretsList.css';

function SecretsList({color, searchFilter}) {
    // eslint-disable-next-line
    const [secrets, setSecrets] = useState(
        [
            {
                secretName: "Facebook",
                attributes: [
                {label: "Email", data: "joshmichaels@hotmail.com", icon: null},
                {label: "Password", data: "SecretPassword1234", icon: null},
                {label: "Description", data: "My personal facebook account", icon: null},
                ]
            },
            {
                secretName: "Twitter",
                attributes: [
                {label: "Email", data: "joshmichaels@hotmail.com", icon: null},
                {label: "Password", data: "StarWars1998", icon: null},
                {label: "Description", data: "My personal twitter account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
            {
                secretName: "Work gmail account",
                attributes: [
                {label: "Email", data: "joshpancakes@gmail.com", icon: null},
                {label: "Password", data: "ilovepancake$s2", icon: null},
                {label: "Description", data: "Pancakes store gmail account", icon: null},
                ]
            },
        ]
    );

    const renderSecrets = () => {
        if (secrets.length <= 0) {
            return;
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