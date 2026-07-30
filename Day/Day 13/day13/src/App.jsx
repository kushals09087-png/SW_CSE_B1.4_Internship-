import Button from "./components/Functional component"
import  { LeftArrow, RightArrow} from "./components/Functional Component2";
import './App.css'
import  ProfileList  from "./components/Props";
import InfoBoxDemo from "./components/PropsTwo";
const name = "Kushal";
const isLoggedIn = true;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* JSX Rule 1: Return one parent element  */}
     <h1>Hello</h1>
    
    {/* Rule2: Every tag must be closed */}
    <p>Error</p> 
    <input type="text"/>
    {/* Rule3: use CamelCase for attributes */}
    <button onClick onSubmit>Click</button>

    {/* Rule 4: Embedding JS with curly braces */}  
    <h3> Hello, {name}</h3>

    {/* Rule 5: use expressions, not statements */}
    <p>{isLoggedIn ? "Welcome Back" : "Please Login"} </p>

    <button />
    <LeftArrow />
    <RightArrow />
    <ProfileList />
    <InfoBoxDemo />
    </> 
  )
}

export default App
