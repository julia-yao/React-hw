
import Navbar from './Navbar';
import Home from './Home';


function App(props) {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  );
}

export default App;
