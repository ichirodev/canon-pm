import './SecretAttribute.css';
import '../../../App.css';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';

function SecretAttribute({color, label, data, isItPassword}) {
    const [isPassword, setIsPassword] = useState(isItPassword);
    const [showPassword, setShowPassword] = useState(true);
    const [originalData, setOriginalData] = useState(data);
    const [placeholderData, setPlaceholderData] = useState(data);

    const renderShowPasswordButton = () => {
        if (showPassword) {
            return (
                <button className={color + "-transparent-button"} onClick={
                () => {
                    setPlaceholderData(originalData);
                    setShowPassword(false);
                }
            }>
                    <MdVisibility/>
                </button>
            );
        }

        return (
            <button className={color + "-transparent-button"} onClick={
                () => {
                    setPlaceholderData("*****************");
                    setShowPassword(true);
                }
            }>
                <MdVisibilityOff/>
            </button>
        );
    }

    return (
        <div className="secret-attribute">
            <table>
                <tbody>
                <tr>
                    <th className="secret-attribute-label">{label}</th>
                    <th className="secret-attribute-data">{placeholderData}</th>
                    {isPassword ? <th className="secret-attribute-icon">{renderShowPasswordButton()}</th>: null}
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SecretAttribute;