import { ContactMeContainer } from "./styles";
import { contactInfo } from "components/Data/contactInfo";

const ContactMe = () => {
  return (
    <ContactMeContainer>
      <h2 className="title">Let's Build Something Together</h2>
      <p>
        Have a question? or Are you looking for a software developer? Contact me
        at:
      </p>
      <div className="contact-section">
        <div className="phone">
          <p>
            <span>Phone:</span>
            <a href={`tel:${contactInfo.phone}`}>&nbsp; {contactInfo.phone}</a>
          </p>
        </div>

        <div className="email">
          <p>
            <span>Email:</span>
            <a href={`mailto:${contactInfo.email}`}>
              &nbsp; {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </ContactMeContainer>
  );
};

export default ContactMe;
