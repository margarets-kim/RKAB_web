import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faCodeBranch} from "@fortawesome/free-solid-svg-icons"
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

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

function setInput(){
  getRepo(props.info.owner,props.info.name).then((res)=>{
    console.log(res);
    props.getInput({id:res.data.id,type:'telegram'})
    //next();
  }
  );
    
}
async function getRepo(owner,repo) {
  try{
    return await octokit.repos.get({
      owner,
      repo,
    })
  }
  catch (error){
    console.log(error);
  }
}
      return(
      <><div className='card-branch'>
      <h3>레포지토리를 확인하고 다음을눌러주세요</h3>
      
      </div>
       <div className='view-repo'>

         <div className="profile">
        <img src={props.info.avatar_url} alt="profile"/>
        <h4>{props.info.owner}의<br/> {props.info.name}</h4>
      <p>Created At {(props.info.created_at).split("T")[0]}</p>
      <p>Updated At {(props.info.updated_at).split("T")[0]}</p>
      <div className="detail"><span><FontAwesomeIcon icon={faStar} size="xs" color="#a8a8a8"/><p>{props.info.stargazers_count}</p></span> <span><FontAwesomeIcon icon={faCodeBranch} size="xs"   color="#a8a8a8"/> <p> {props.info.forks}</p></span></div>
        </div>
       
      </div>
      <div className="card-bottom">
        <button onClick={()=>{setInput()}} className="next telegram active">Next</button>
        <button onClick={prev} className="prev">Back</button>
        </div>
    </>
      );
  }
  export default CardQrcode;