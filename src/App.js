import logo from './logo.svg';
import './App.css';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import AmazingNumberButton from './AmazingNumberButton';

function App() {

  const NumberButton = [];
  for(let i=9; i>=0; i++){
    NumberButton.push(<AmazingNumberButton name="numberbutton" value={i}/>);
  }

  const OperationButton = ["+","-","*","/","%","C"];

  return (
    <div className="App">
    <BeautifulScreen/>
    <GreatOperationButton name="operationbutton"/>
    <AmazingNumberButton name="numberbutton"/>
    <MagnificientEqualButton name="test"/>
    </div>
  );
}

export default App;
