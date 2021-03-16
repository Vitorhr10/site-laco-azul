import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Entrar em contato</h3>
          <form action="https://formspree.io/f/mbjpnpql" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="nome" className="form-control" />
              <input type="email" name="email" placeholder="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="mensagem" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact