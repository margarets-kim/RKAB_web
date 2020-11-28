import React, { useState } from 'react';
import './Card.css';
import CardIntro from './Card_intro';
import CardRegister from './Card_register';
import CardQrcode from './Card_qrcode';

const Card = (props)=> {
    const [page,setPage] = useState(1);
    function pageChange(e){
        setPage(e);
      }
      return(
      <>
      <section className="main_card">
        
        {page===1&&
        <CardIntro page={page} onChange={pageChange}/>
        }{page===2&&
          <CardRegister page={page} onChange={pageChange}/>
        }{page===3&&
          <CardQrcode page={page} onChange={pageChange}/>
        }
        
        
      </section>
    </>
      );
  }
  
  export default Card;