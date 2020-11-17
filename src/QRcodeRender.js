import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const QRcodeRender = (props)=> {

      return(
      <>
      <render>
      <QRCode bgColor="transparent" value={props.url} size="100"/>
      </render>
    </>
      );
  }
  
  export default QRcodeRender;