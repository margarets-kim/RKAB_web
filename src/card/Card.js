import React, { useState,useEffect } from 'react';
import './Card.css';
import CardIntro from './Card_intro';
import CardRegister from './Card_register';
import CardQrcode from './Card_qrcode';

const Card = (props)=> {
    
    const [page,setPage] = useState(1);
    const [info, setInfo]=useState();   
    function pageChange(e){
        setPage(e);
      }
      function getInfo(e){
        setInfo(e);
        setPage(3);
      }
      useEffect(()=>{console.log(info)},[info]);
      return(
      <>
        
        {page===1&&
        <CardIntro page={page} onChange={pageChange}/>
        }{page===2&&
          <CardRegister page={page} getInfo={getInfo} onChange={pageChange}/>
        }{page===3&&
          <CardQrcode page={page} info={info} onChange={pageChange}/>
        }
        
    </>
      );
  }
  
  export default Card;