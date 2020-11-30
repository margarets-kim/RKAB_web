import React, { useState } from 'react';
import QRcodeRender from '../QRcodeRender';
const CardResult = (props)=> {

    const result = {
        url : props.info.url,
        alias : encodeURI(props.info.alias),
        branch: props.info.branch,
        type : 'kakao'
    }
 console.log(JSON.stringify(result));
function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(1);
}
      return(
      <><div className='card-branch'>
      <h3>아래 QR코드를 카카오톡 깃허벨 챗에게 전달하세요</h3>
      
      </div>
       <div className='view'>
         <QRcodeRender url={JSON.stringify(result)}/>
       
       
     
      </div>
      <div className="card-bottom">
        <button onClick={prev} className="prev active kakao">Main</button>
        </div>
    </>
      );
  }
  
  export default CardResult;