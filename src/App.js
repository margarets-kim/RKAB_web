
import banner from './image/githubell_logo.png'
import kakao from './image/kakao_logo.png'
import telegram from './image/telegram_logo.png'
import './App.css';
import './style.css'
import Card from './card/Card'
import Telegram from './Telegram/Telegram'
import React, { useState } from 'react';


/** 
 * https://github.com/유저이름/레포이름
 * 주소 형식이 위와 같아야함.
*/

const App = ()=> {
  const [type,setType]=useState('kakao')

  function changeKakao (e){
    setType('kakao');
  }
  function changeTelegram (e){
    setType('telegram');
  }

    return(
    <div className="App">
      <main className="App-header">
        <header>
          <img className="logo" alt="logo" src={banner} />
          <p>Github 레포지토리 소식을 메신저로 받아보세요</p>
        </header>
        <section className='contents'>
          <div className="tab-bar">
            <a  onClick={changeKakao} ><div className={'tab ' + (type==='kakao'?'tab-select':'tab-none')}><img src={kakao} alt="kakao logo" style={{borderRadius:'50px'}} /><p>KakaoTalk</p></div></a>
            <a onClick={changeTelegram}><div className={'tab ' + (type==='telegram'?'tab-select':'tab-none')}><img src={telegram} alt="telegram logo" /><p>Telegram</p></div></a>
          </div>
          <section className='main-view'>
            {type==='kakao'&&
            <Card/>}{type==='telegram'&&<Telegram/>}
          </section>
        </section>
        <footer>
          <h6>Our Github | <a href="https://github.com/margarets-kim/RKAB_web" target="_blank" rel="noreferrer">web</a> | <a href="https://github.com/margarets-kim/RepoKaKaoAlarmBot" target="_blank" rel="noreferrer"> api</a></h6>
         <br/>
          
        </footer>
       
    
    </main>
    </div>
    );
}

export default App;
