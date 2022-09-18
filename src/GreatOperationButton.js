import './GreatOperationButton.css';

function GreatOperationButton(value,props) {

    function handleclick(){
    console.log(props.name);
    }

  return (
    <button className='operationbutton' onClick = {handleclick}>{value}</button>
  );
}

export default GreatOperationButton;
