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
        <h4>시작하려면 <a target="_blank" href="http://pf.kakao.com/_chxcXK" rel="noreferrer">깃허벨 채널</a>을 추가하고 서비스를 이용하세요!</h4>
        
        </div>
        <div className="render">
         
          <img alt="qrcode for channel" src={channel} className="qrCode_img how_to" />
        
         
        <div className="how_to">
        <ol>
            <li>깃허벨 카카오톡 채널을 추가하세요(@깃허벨)</li>
            <li>'다음'을 눌러 원하는 깃허브 레포지토리 url을 넣으세요</li>
            <li>생성된 QR코드를 찍는다</li>
            <li>등록 완료!</li>
        </ol>
      </div>
      
        </div>
        </div>
        <div className="card-bottom">
      <button className="active kakao" onClick={next}>
       
          Next
        </button>
        </div>
    </>
      );
  }
  
  
  export default TIntro;