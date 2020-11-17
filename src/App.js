import logo from './logo.svg';
import './App.css';
import QRcodeRender from './QRcodeRender'
import React, { useState, useEffect } from 'react';

/** 
 * https://github.com/유저이름/레포이름
 * 주소 형식이 위와 같아야함.
*/

const App = ()=> {

  const [url, setUrl] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const onChangeUrl = e => {
    setUrl(e.target.value);
  };
  const generate = e =>{
    setQrcodeLink(url);
  }
    return(
    <>
    <div className="App">
      <main className="App-header">
        <header>
        <h1>Github Repo News is come to your Kakao</h1>
        </header>
        <h3>Let Me Know Your Repository News</h3>
        <section>
          <form>
            <label for="url_input">
            </label>
          <input placeholder="https://github.com/user/repository" type="text" vlaue={url} onChange={onChangeUrl} class ="url_input"id="url_input" name="url-form"/>
          <button type="button" onClick={generate}>GENERATE!</button>
        </form>
        </section>
        
        <QRcodeRender url={qrcodeLink}/>
       
    
    </main>
    </div>
  </>
    );
}

export default App;
