import { ContactIcon, ContactLink, ContactLinks, ContactSection, ContactTitle } from "./styles"

const Contact = () => {
  const contacts = [
    {
      href: "https://www.linkedin.com/in/silvia-abe/",
      title: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      label: "linkedin.com/in/silvia-abe",
    },
    {
      href: "https://github.com/silviaabe",
      title: "GitHub",
      icon: "fa-brands fa-github",
      label: "github.com/silviaabe",
    },
    {
      href: "mailto:silviaabebuzatto@gmail.com",
      title: "E-mail",
      icon: "fa-solid fa-envelope",
      label: "silviaabebuzatto@gmail.com",
    },
    {
      href: "https://www.google.com/maps/place/Itararé,+SP",
      title: "Localização",
      icon: "fa-solid fa-location-dot",
      label: "Itararé/SP - Brasil",
    },
  ];

  return (
    <ContactSection id="contact" aria-labelledby="contact-title">
      <ContactTitle id="contact-title">Vamos conversar!</ContactTitle>
      <ContactLinks>
        {contacts.map((contact, index) => (
        <ContactLink key={index}>
          <ContactIcon
            href={contact.href}
            title={contact.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={contact.icon}></i>
            <span>{contact.label}</span>
          </ContactIcon>
        </ContactLink>
        ))}
      </ContactLinks>
    </ContactSection>
  )
}

export default Contact