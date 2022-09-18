import './MagnificientEqualButton.css';


function MagnificientEqualButton(props) {

    function handleclick(){
    console.log(props.name);
    }

  return (
    <button className='eaqualbutton' onClick = {handleclick}>=</button>
  );
}

export default MagnificientEqualButton;