import React, { useState } from 'react';
import './Card.css';

const CardQrcode = (props)=> {

  const [info,setInfo]=useState({alias:'',branch:'',url:'',type:'kakao'})

function prev(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page-1);
}
function next(e) {
  // Here, we invoke the callback with the new value
  props.onChange(props.page+1);
}
      return(
      <><div className='card-branch'>
      <h3>레포지토리의 브랜치를 선택하고 별명을 입력해주세요</h3>
      
      </div>
       <div className='view-repo'>

         <div className="profile">
        <img src={props.info.avatar_url} alt="profile"/>
       
        </div>
       
      <div className='repo-info'> <h5>{props.info.owner}의 {props.info.name} 프로젝트</h5>
      <input type="text" placeholder="별명을 설정해주세요" value={info.alias} name="alias-input"/>
      <div className="branch-list">
        <h5>branch</h5>
        <select className="branch">
        {props.info.branch_lists.map(branch => (
          <option value={branch}>{branch}</option>))}
          </select>
      </div>
      </div>
      </div>
      <div className="card-bottom">
        <button onClick={next} className=" prev">Next</button>
        <button onClick={prev} className=" prev">Back</button>
        </div>
    </>
      );
  }
  
  export default CardQrcode;