import React from "react";
import './Service.css';
import services_data from '../../assets/services_data'
const Service=()=>{
  return(
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">{services_data.map((service,index)=>{
        return <div key={index} className="services-format">
          <h3>{service.id}</h3>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <h1>{service.icon}</h1>
        </div>
      })}</div>

    </div>
  )
}
export default Service;