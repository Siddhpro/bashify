import { useState } from "react"
import './Display.css'

function Display() {

    const [bash, setBash] = useState(false);

    function handleBash() {
        setBash(true)
    }

    return (
        <div className="display-container">
            <h1 className="display-header">Hi, User</h1>
            <input className="display-input" type="text" placeholder="Enter your playlist link" />
            <button className="display-btn" onClick={handleBash}>Bash</button>
            {bash && <p className="display-message">Curating your playlist...</p>}
        </div>
    );
}

export default Display;