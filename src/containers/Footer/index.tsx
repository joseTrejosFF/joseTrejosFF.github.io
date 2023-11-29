import { FooterStyled } from './styles';
import BtnScrollTop from 'components/BtnScrollTop';

const Footer = (): JSX.Element => {
  return (
    <>
      <BtnScrollTop />
      <FooterStyled>
        <a href='/#top'>
          <p>
            &copy; {new Date().getFullYear()} by Jose Mauricio Trejos Castro.
          </p>
        </a>
      </FooterStyled>
    </>
  );
};

export default Footer;
