import React from "react"
import Title from "./Title"
import companies from "../constants/companies"
const Companies = () => {
  return (
    <section className="section bg-white">
      <Title title="a laço azul"/>
      <div className="section-center companies-center">
        {companies.map((company)=>{
          const { id, icon, title, text } = company
          return (
            <article key={id} className="company">
              <div className="company-icon">{icon}</div>
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
