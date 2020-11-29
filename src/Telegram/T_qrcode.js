import React, { useState } from 'react';


const CardQrcode = (props)=> {

function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page-1);
}
      return(
      <>
      <div className='view'></div>
      <div className="card-bottom">
      
      <button className="btn prev" onClick={prev}>
       
      Back
     </button>
        </div>
    </>
      );
  }
  
  export default CardQrcode;