import React, { useState } from 'react';
import './Card.css';

const CardQrcode = (props)=> {

function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page-1);
}
      return(
      <>
      <div className="card-bottom">
      
        <button onClick={prev}>
        <div className="btn prev">
          <p>Back</p>
        </div>
        </button>
        </div>
    </>
      );
  }
  
  export default CardQrcode;