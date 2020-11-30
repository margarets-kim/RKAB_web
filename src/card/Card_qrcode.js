import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faCodeBranch} from "@fortawesome/free-solid-svg-icons"
const CardQrcode = (props)=> {

  const [alias,setAlias]=useState(props.info.name)
  const [branch,setBranch]=useState(props.info.branch_lists[0])

function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page-1);
}
function next(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page+1);
}
function setAliasF(e) {
  // Here, we invoke the callback with the new value
  setAlias(e.target.value)
}
function setBranchF(e){
  setBranch(e.target.value);
  
}
function setInput(){
  props.getInput({alias:alias,branch:branch,url:'https://github.com/'+props.info.owner+'/'+props.info.name,type:'kakao'});
  
  next();
}
      return(
      <><div className='card-branch'>
      <h3>레포지토리의 브랜치를 선택하고 별명을 입력해주세요</h3>
      
      </div>
       <div className='view-repo'>

         <div className="profile">
        <img src={props.info.avatar_url} alt="profile"/>
        <h4>{props.info.owner}의<br/> {props.info.name}</h4>
      <p>Created At {(props.info.created_at).substring(0, 10)}</p>
      <p>Updated At {(props.info.updated_at).substring(0, 10)}</p>
      <div className="detail"><span><FontAwesomeIcon icon={faStar} size="xs" color="#a8a8a8"/><p>{props.info.stargazers_count}</p></span> <span><FontAwesomeIcon icon={faCodeBranch} size="xs"   color="#a8a8a8"/> <p> {props.info.forks}</p></span></div>
        </div>
       
      <div className='repo-info'><h5>별명</h5>
      <input type="text" placeholder="특수문자 제외, 공란은 레포지토리 이름으로 저장됩니다" onChange={setAliasF} className="alias-input"/>
      <div className="branch-list">
        <h5>branch</h5>
        <select className="branch" name="dd" onChange={setBranchF}>
        {props.info.branch_lists.map(branch => (
          <option value={branch}>{branch}</option>))}
          </select>
      </div>
      </div>
      </div>
      <div className="card-bottom">
        <button onClick={setInput} className="next kakao active">Next</button>
        <button onClick={prev} className="prev">Back</button>
        </div>
    </>
      );
  }
  
  export default CardQrcode;