import './AmazingNumberButton.css';


function AmazingNumberButton(value,props) {

  function handleclick(){
    console.log(props.name);
  }

  return (
    <button className="numberbutton" onClick = {handleclick} >{value}</button>
    
  );
}

export default AmazingNumberButton;
