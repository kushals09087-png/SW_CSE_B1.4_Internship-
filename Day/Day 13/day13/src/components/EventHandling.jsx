// Event Handling is the way components respond to user actions and browser events
// clicks, tyo\ping, form submissions, hovering, key presses
// Events are named in camelCase(❌onClick, ❌OnClick )
// We pass a function reference as the handler, not a string
// 🌟default behaviour of reactJS is to rerender when sate gets modified, forms 
// if gets re-rendered then the content: event.preventDefault()
function ClickDemo() {
    function handleSeparateClick(){
        alert("Separate handler clicked");
    }
    return(
        <div>
            <h6>Click Demo</h6>
            <button onClick={handleSeperateClick}>Seperate Handler</button>
            <button onClick={()=>alert("Inline handler clicked")}>Inline handler</button>
        </div>
    );
} 
export default ClickDemo;