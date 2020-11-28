
import banner from './image/githubell_logo.png'

import './App.css';
import Card from './card/Card'
import React, { useState } from 'react';


/** 
 * https://github.com/유저이름/레포이름
 * 주소 형식이 위와 같아야함.
*/

const App = ()=> {
    return(
    <div className="App">
      <main className="App-header">
        <header>
        <img className="logo" alt="logo" src={banner} />
        <p>Github 레포지토리 소식을 메신저로 으로 받아보세요</p>
        </header>
        <Card/>
        
        <footer>
          <h6>Our Github | <a href="https://github.com/margarets-kim/RKAB_web" target="_blank" rel="noreferrer">web</a> | <a href="https://github.com/margarets-kim/RepoKaKaoAlarmBot" target="_blank" rel="noreferrer"> api</a></h6>
         <br/>
          
        </footer>
       
    
    </main>
    </div>
    );
}

export default App;
