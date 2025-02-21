import { ContactIcon, ContactLink, ContactLinks, ContactSection, ContactTitle } from "./styles"

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Vamos conversar!</ContactTitle>
      <ContactLinks>
        <ContactLink>
          <ContactIcon href="https://www.linkedin.com/in/silvia-abe/" title="LinkedIn" target="_blank">
            <div className="social-link">
              <i className="fa-brands fa-linkedin"></i>
              <h3>linkedin.com/in/silvia-abe</h3>
            </div>
          </ContactIcon>
        </ContactLink>
        <ContactLink>
          <ContactIcon href="https://github.com/silviaabe" title="GitHub" target="_blank">
            <div className="social-link">
              <i className="fa-brands fa-github"></i>
              <h3>github.com/silviaabe</h3>
            </div>
          </ContactIcon>
        </ContactLink>
        <ContactLink>
          <ContactIcon href="mailto:silviaabebuzatto@gmail.com" title="E-mail">
            <div className="social-link">
              <i className="fa-solid fa-envelope"></i>
              <h3>silviaabebuzatto@gmail.com</h3>
            </div>
          </ContactIcon>
        </ContactLink>
        <ContactLink>
          <ContactIcon href="https://www.google.com.br/maps/place/Itarar%C3%A9,+SP,+18460-000/@-24.1127591,-49.3684946,13z/data=!3m1!4b1!4m6!3m5!1s0x94c3b5744abab149:0x334172af9a405a53!8m2!3d-24.1099321!4d-49.3306862!16s%2Fg%2F1pxydjd03?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D" title="Localização" target="_blank">
            <div className="social-link">
              <i className="fa-solid fa-location-pin"></i>
              <h3>Itararé/SP - Brasil</h3>
            </div>
          </ContactIcon>
        </ContactLink>
      </ContactLinks>
    </ContactSection>
  )
}

export default Contact