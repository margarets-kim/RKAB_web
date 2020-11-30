import React, { useState } from 'react';
import channel from '../image/qrcode_telegram.png';


const TIntro = (props)=> {
  function next(e) {
    // Here, we invoke the callback with the new value
    props.onChange(props.page+1);
}
      return(
      <>
      <div className='view'>
      <div className='card-intro'>
        <h4>시작하려면 <a target="_blank" href="https://t.me/Githubell_bot" rel="noreferrer">깃허벨 봇</a>을 추가하고 서비스를 이용하세요!</h4>
        
        </div>
        <div className="render">
         
          <img alt="qrcode for channel" src={channel} className="qrCode_img how_to" />
        
         
        <div className="how_to">
        <ol>
            <li>텔레그램에서 봇을 추가합니다(@githubell_bot)</li>
            <li>하단의 '시작'을 누르세요</li>
            <li>준비 완료!</li>
        </ol>
      </div>
      
        </div>
        </div>
        <div className="card-bottom">
        <button className="active telegram" onClick={next}>
       
        Next
     </button>
        </div>
    </>
      );
  }
  
  export default TIntro;