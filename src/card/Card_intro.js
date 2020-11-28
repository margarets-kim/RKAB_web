import React, { useState } from 'react';
import channel from '../image/QRcode_channel_2.png';
import './Card.css';

const CardIntro = (props)=> {
  function next(e) {
    // Here, we invoke the callback with the new value
    props.onChange(props.page+1);
}
      return(
      <>
      <div>
        <h4>시작하기위해 <a target="_blank" href="http://pf.kakao.com/_chxcXK" rel="noreferrer">깃허벨 채널</a>을 추가하고 서비스를 이용하세요!</h4>
        
        </div>
        <div className="render">
         
          <img alt="qrcode for channel" src={channel} className="qrCode_img how_to" />
        
         
        <div className="how_to">
        <ol>
            <li>채널 채팅을 연다</li>
            <li>등록 버튼을 누른다</li>
            <li>생성된 QR코드를 찍는다</li>
            <li>등록 완료!</li>
        </ol>
      </div>
      
        </div>
        <div className="card-bottom">
      <button onClick={next}>
        <div className="btn next">
          <p>Next</p>
        </div>
        </button>
        </div>
    </>
      );
  }
  
  export default CardIntro;