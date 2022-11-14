import { HeaderDiv } from '../../../shared/components/header/HeaderStyled';
import { strings } from '../../../localization/Localization';

const Header = () => {
  return (
    <HeaderDiv>
      <p>{strings.common.header_title}</p>
    </HeaderDiv>
  );
};

export default Header;
