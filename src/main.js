import React, {useState} from 'react';
import QrReader from 'react-qr-reader';
import JsonInfo from './JsonInfo.js';
import './App.css';


const MainOne = () => {
  const [qrValue, setQrValue] = useState({});

  //const hello = 'Hello World';

  const handleScan = (data) => {
    if (data) {
      setQrValue(JSON.parse(data));
 
      /* doSomethingWithCage(JSON.parse(data).CageId); */
    }
  };
 
  const handleError = (error) => {
    console.log("Error: ", error);
  };
 
 /*  const doSomethingWithCage = (cageId) => {
    alert("I did something with cage: " + cageId);
    
  }; */
  const [state, setState] = useState({data:""}) 
  const changeState = () => {   
    setState({data: qrValue.CageId});  
   };  

  console.log(state)
  return (
    <>
      <QrReader
        delay={500}
        onScan={handleScan}
        onError={handleError}
        style={{width:'50%', height:'50%'}}
      ></QrReader>
      <p>{JSON.stringify(qrValue)}</p>
      <p>CageId: {qrValue.CageId}</p>
      <JsonInfo data={qrValue.CageId}/>
      <button  onClick={changeState} type="button"> 
                  Send state  
                  {console.log(state)}
                </button>     
    </>
  )
}

export default MainOne;