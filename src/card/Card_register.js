import React, { useState } from 'react';
import QRcodeRender from '../QRcodeRender';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"

const CardRegister = (props)=> {
  const [qrcodeLink, setQrcodeLink] = useState(null);
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(props.page);
  const [error,setError]=useState(false);
  
  const fetchData = async (info) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "https://margarets.pythonanywhere.com/api/info/?id="+info.id+"&repo="+info.repo;
    fetch(proxyUrl+targetUrl)
    .then(blob => blob.json())
      .then((result) => {
        props.getInfo(result);
        console.log(result);
      }).catch((e)=>{
        console.log(e);
        setError(true);
      })
    }
  const onChangeUrl = e => {
    setUrl(e.target.value);
    setError(false);
  };
  const generate = e =>{
    const isGithubUrl = new RegExp(/(http(s)?:\/\/)(github\.com\/)+([a-z0-9-_\.]*)(\/)+([a-z0-9-_\.]*)/i);
    
    //console.log(url.length);
    if(isGithubUrl.test(url)){
      const result = {url : isGithubUrl.exec(url)[0],id : isGithubUrl.exec(url)[4], repo: isGithubUrl.exec(url)[6]};
      
      console.log(result);
      //setQrcodeLink(url);
      
      fetchData(result);
    }else{
      setError(true);
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
      <div className='view'>
      <div className='card-register'>
        <h4>소식을 받고 싶은 깃허브 레포지토리 주소를 입력하세요!</h4>
        
        </div>
        {qrcodeLink===url&&
          <QRcodeRender url={qrcodeLink}/>
        }
          <form className='url_form'>
            <label htmlFor="url_input">
            </label>
            <div className="input_guide kakao"><FontAwesomeIcon icon={faGithub} size="1x" /></div>
            <input placeholder="https://github.com/username/repository" type="text" vlaue={url} onChange={onChangeUrl} className ="url_input"id="url_input" name="url-form"/>
          
        </form>
        <p className={'error-txt '+(error?'show':'hidden')}>올바르지않은 주소 형식입니다!</p>
        </div>

        <div className="card-bottom">
        <button onClick={generate} className={(url?'active kakao':'none')}>

Next

</button>
<button onClick={prev} className=" prev">

Back

</button>
        </div>
    </>
      );
  
}
  
  export default CardRegister;