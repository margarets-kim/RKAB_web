import channel from './image/QRcode_channel_2.png';
import './App.css';
import QRcodeRender from './QRcodeRender'
import React, { useState } from 'react';

/** 
 * https://github.com/유저이름/레포이름
 * 주소 형식이 위와 같아야함.
*/

const App = ()=> {

  const [url, setUrl] = useState('https://github.com/margarets-kim/RKAB_web');
  const [qrcodeLink, setQrcodeLink] = useState(null);
  const onChangeUrl = e => {
    setUrl(e.target.value);
  };
  const generate = e =>{
    const isGithubUrl =/(http(s)?:\/\/?)(github\.com)(\/)([a-z0-9-]+\/)([a-z0-9-]+)/i;
    //console.log(url.length);
    if(url.length===0){
      setUrl('https://github.com/margarets-kim/RKAB_web');
      //console.log(url);
    }
    if(isGithubUrl.test(url)){
      //console.log('its github url');
      setQrcodeLink(url);
    }else{
      //console.log('its not github');
    }
    
  }
    return(
    <>
    <div className="App">
      <main className="App-header">
        <header>
        <h1>Github Repo News is come to your KakaoTalk</h1>
        
        </header>
        {qrcodeLink!==url&&
          <h3>소식을 원하는 레포지토리 URL을 넣으세요</h3>
        }{qrcodeLink===url&&
          <QRcodeRender url={qrcodeLink}/>
        }
        
        <section>
          <form>
            <label htmlFor="url_input">
            </label>
          <input placeholder="https://github.com/margarets-kim/RKAB_web" type="text" vlaue={url} onChange={onChangeUrl} className ="url_input"id="url_input" name="url-form"/>
          <button type="button" onClick={generate}>GENERATE!</button>
        </form>
        </section>
        


        <section className="intro">
          <div className="intro-text">
        <h4>시작하기위해 <a target="_blank" href="http://pf.kakao.com/_chxcXK" rel="noreferrer">저희 채널</a>을 추가하세요!</h4>
        
        
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
      </section>
        
        <footer>
          <h6>Our Github | <a href="https://github.com/margarets-kim/RKAB_web" target="_blank" rel="noreferrer">web</a> | <a href="https://github.com/margarets-kim/RepoKaKaoAlarmBot" target="_blank" rel="noreferrer"> api</a></h6>
         <br/>
          
        </footer>
       
    
    </main>
    </div>
  </>
    );
}

export default App;
