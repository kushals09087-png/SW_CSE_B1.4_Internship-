import { useState } from 'react';
function TogglrText() {
    // showText is a State
    const [showText, setshowText] = useState(True);
     return(
        <div className="toggle">
            <h2>Toggle Text</h2>
            <button onClick-={()=>setShowText(!showText)}>{showText ? "Hide": "Show"}</button>
            {showText && <p>Now you can see this text.</p>}
        </div>
     );
}
export default ToggleText;