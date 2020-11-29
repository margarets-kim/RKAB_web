import React, { useState,useEffect } from 'react';
import './Card.css';
import CardIntro from './Card_intro';
import CardRegister from './Card_register';
import CardQrcode from './Card_qrcode';
import CardResult from './Card_result';
const Card = (props)=> {
    
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
        <CardIntro page={page} onChange={pageChange}/>
        }{page===2&&
          <CardRegister page={page} getInfo={getInfo} onChange={pageChange}/>
        }{page===3&&
          <CardQrcode page={page} getInput={getInput} info={info} onChange={pageChange}/>
        }{page===4&&
            <CardResult page={page} info={input} onChange={pageChange}/>
          }
        
    </>
      );
  }
  
  export default Card;