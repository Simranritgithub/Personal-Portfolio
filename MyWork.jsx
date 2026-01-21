import React from "react";
import './MyWork.css';
import mywork_data from "../../assets/mywork_data";
const MyWork=()=>{
  return(
    <div id="mywork"  className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt=""/>
        })}
        
      </div>
      <div className="mywork-showmore">
        <p>Show More ----</p>
        
      </div>

    </div>
  )
}
export default MyWork;