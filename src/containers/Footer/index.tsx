import { FooterStyled } from "./styles";
import ContactMe from "./ContactMe";
import BtnScrollTop from "components/BtnScrollTop";

const Footer = (): JSX.Element => {
  return (
    <>
      <BtnScrollTop />
      <ContactMe />
      <FooterStyled>
        <a href="/#top">
          <p>
            &copy; {new Date().getFullYear()} by Jose Mauricio Trejos Castro.
          </p>
        </a>
      </FooterStyled>
    </>
  );
};

export default Footer;
