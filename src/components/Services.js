import React from "react"
import Title from "./Title"
import Service from "./Service"
import { Link } from "gatsby"
const Services = ({services, title, showLink}) => {
  return (
    <section className="section services">
      <Title title={title} />
      <div className="section-center services-center">
        {services.map((service,index)=>{
          return <Service key={service.id} index={index} {...service} />
        })}
      </div>
      {
        showLink && (
          <Link to='/services' className="btn center-btn">
            serviços
          </Link>
        )
      }
    </section>
  )
}

export default Services
