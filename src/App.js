import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = ()=> {

  const [url, setUrl] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const onChangeUrl = e => {
    setUrl(e.target.value);
  };
  const generate = e =>{

  }
    return(
    <>
    <div className="App">
      <header className="App-header">
        <h1>Github Favorties Repo is come to your Kakao</h1>
        </header>
        <h1>Let Me Know Your Repository News</h1>
       <form>
         <input type="text" vlaue={url} onChange={onChangeUrl} id="url" name="url-form"/>
         <button type="button" onClick={generate}>GENERATE!</button>
       </form>
    <div><p>{url}</p></div>
     
    </div>
  </>
    );
}

export default App;
