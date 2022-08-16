import './NewSecret.css';
import '../../style/colors.css';

function NewSecret({color}) {
    return (
        <div className={"new-secret " + color + "-sc"}>
            <h3>New secret</h3>
            <form className={"secret-form " + color + "-secret-form "}>
                <label>
                    Name:
                    <input name="secret-name" type="text"/>
                </label>
                <br/>
                <label>
                    Email address 1:
                    <input name="secret-email" type="text"/>
                </label>
                <br/>
                <label>
                    Email address 2 (Optional):
                    <input name="secret-email-opt" type="text"/>
                </label>
                <br/>
                <label>
                    Phone number:
                    <input name="secret-phone-number" type="text"/>
                </label>
                <br/>
                <label>
                    Password:
                    <input name="secret-password" type="text"/>
                </label>
                <br/>
                <label>
                    Details:
                    <input name="secret-details" type="text"/>
                </label>
                <br/>
                <label>
                    Recovery method:
                    <select className={color + "-select"}>
                        <option>Phone number</option>
                        <option>Email</option>
                        <option>Code</option>
                        <option>Special word</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default NewSecret;