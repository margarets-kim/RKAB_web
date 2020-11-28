import React, { useState } from 'react';
import './Card.css';
import QRcodeRender from '../QRcodeRender';

const CardRegister = (props)=> {
  const [qrcodeLink, setQrcodeLink] = useState(null);
  const [url, setUrl] = useState('https://github.com/margarets-kim/RKAB_web');
  const [page, setPage] = useState(props.page);
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
      console.log('its not github');
    }
  }
  function next(e) {
    // Here, we invoke the callback with the new value
    props.onChange(props.page+1);
}
function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page-1);
}
      return(
      <>
      <div>
      <p>소식을 받고싶은 레포지토리 url을 입력해주세요</p>
        {qrcodeLink===url&&
          <QRcodeRender url={qrcodeLink}/>
        }
          <form>
            <label htmlFor="url_input">
            </label>
          <input placeholder="https://github.com/margarets-kim/RKAB_web" type="text" vlaue={url} onChange={onChangeUrl} className ="url_input"id="url_input" name="url-form"/>
          <button type="button" onClick={generate}>GENERATE!</button>
        </form>
        </div>
        <div className="card-bottom">
      <button onClick={next}>
        <div className="btn next">
          <p>Next</p>
        </div>
        </button>
        <button onClick={prev}>
        <div className="btn prev">
          <p>Back</p>
        </div>
        </button>
        </div>
    </>
      );
  
}
  
  export default CardRegister;