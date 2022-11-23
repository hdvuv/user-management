import { FooterDiv } from '../../../shared/components/footer/FooterStyled';
import { strings } from '../../../localization/Localization';

const Footer = () => {
  return (
    <FooterDiv>
      <p>{strings.common.footer_title}</p>
    </FooterDiv>
  );
};

export default Footer;
