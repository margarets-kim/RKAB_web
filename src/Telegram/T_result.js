import React, { useState } from 'react';
import QRcodeRender from '../QRcodeRender';

const TResult = (props)=> {

    const result = {
        id : props.info.id,
        branch: props.info.branch
    }
 console.log('https://t.me/Githubell_bot?start='+result.id);
 
function main(e) {
  // Here, we invoke the callback with the new value
  props.onChange(1);
}
function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(3);
}

      return(
      <><div className='card-branch'>
      <h3>아래 QR코드를 텔레그램 깃허벨 챗에게 전달하세요</h3>
     
      </div>
       <div className='view'>
         <QRcodeRender url={'https://t.me/Githubell_bot?start='+result.id}/>
       
       
     
      </div>
      <div className="card-bottom">
        <button onClick={main} className="prev active telegram">Main</button>
        <button onClick={prev} className="prev ">Back</button>
        </div>
    </>
      );
  }
  
  export default TResult;