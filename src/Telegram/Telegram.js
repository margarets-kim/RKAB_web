import React, { useState,useEffect } from 'react';
import './Telegram.css';
import TIntro from './T_intro';
import TRegister from './T_register';
import TQrcode from './T_qrcode';
import TResult from './T_result';

const Telegram = (props)=> {
  const [page,setPage] = useState(1);
  const [info, setInfo]=useState();
  const [input,setInput]=useState();
  function pageChange(e){
      setPage(e);
    }
    function getInfo(e){
      setInfo(e);
      setPage(3);
    }
    function getInput(e){
      setInput(e);
      console.log(e);
      setPage(4);
    }
    useEffect(()=>{console.log(info)},[info]);
    return(
    <>
      
      {page===1&&
      <TIntro page={page} onChange={pageChange}/>
      }{page===2&&
        <TRegister page={page} getInfo={getInfo} onChange={pageChange}/>
      }{page===3&&
        <TQrcode page={page} getInput={getInput} info={info} onChange={pageChange}/>
      }{page===4&&
          <TResult page={page} info={input} onChange={pageChange}/>
        }
      
  </>
    );
}
  
  export default Telegram;