import React, { useState } from 'react';
import './Telegram.css';
import CardIntro from './T_intro';
import CardRegister from './T_register';
import CardQrcode from './T_qrcode';

const Card = (props)=> {
    const [page,setPage] = useState(1);
    function pageChange(e){
        setPage(e);
      }
      return(
      <>
        
        {page===1&&
        <CardIntro page={page} onChange={pageChange}/>
        }{page===2&&
          <CardRegister page={page} onChange={pageChange}/>
        }{page===3&&
          <CardQrcode page={page} onChange={pageChange}/>
        }
        
        
    </>
      );
  }
  
  export default Card;