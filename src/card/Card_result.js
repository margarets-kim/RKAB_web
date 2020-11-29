import React, { useState } from 'react';
import QRcodeRender from '../QRcodeRender';
const CardResult = (props)=> {

    const result = {
        url : props.info.url,
        alias : props.info.alias,
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
       <div className='view-repo'>

         <div className="profile">
         <QRcodeRender url={JSON.stringify(result)}/>
        </div>
       
      <div className='repo-info'><h5>별명 : {props.info.alias}</h5>
     
      <div className="branch-list">
      <h5>branch : {props.info.branch}</h5>
        
      </div>
      </div>
      </div>
      <div className="card-bottom">
        <button onClick={prev} className="prev">Go main</button>
        </div>
    </>
      );
  }
  
  export default CardResult;