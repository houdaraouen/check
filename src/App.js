
// les importations


// import React from "react";
 import Name from "./Name";
import Image from "./Image";
import Price from "./Price";
import Description from "./Description";
 import Card from 'react-bootstrap/Card';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import MyWonderfulImage from "./MyWonderfulImage.jpg";

function App() {
 const styleObject = {color: 'red'}
 const firstName = "houda"
  return (
    <>
    <div style={styleObject}>
      <h1>hello world</h1>
      <p>i'm houda</p>
    </div>


    
   <Card style={{ width: '18rem' }}>
      <Image></Image>
      <Card.Body>
     <Name></Name>
     <Price></Price>
     <Description></Description>
     
        {firstName && (
        <img src={MyWonderfulImage} alt="this is my second image"></img> )
          }
      </Card.Body>
    </Card>}
    
    </>
 )
}

export default App;
