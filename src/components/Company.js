import React from "react"
import Title from "./Title"
import companies from "../constants/companies"
const Companies = () => {
  return (
    <section className="section bg-grey">
      <Title title="a laço azul"/>
      <div className="section-center services-center">
        {companies.map((company)=>{
          const { id, icon, title, text } = company
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )          
        })}
      </div>
    </section>
  )
}

export default Companies
