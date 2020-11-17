import React from 'react';
import QRCode from "react-qr-code";
import './QRcodeRender.css';

const QRcodeRender = (props)=> {

      return(
      <>
      <section className="render">
      <QRCode bgColor="transparent" value={props.url} size={100}/>
      
      </section>
    </>
      );
  }
  
  export default QRcodeRender;