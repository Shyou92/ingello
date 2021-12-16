import header from './Header.module.scss';

import Logo from './images/Logo.svg';

import Container from '../../UI/Container/Container';
import IMG from '../../UI/IMG/IMG';
import UL from '../../UI/UL/UL';
import Li from '../../UI/UL/Li/Li';

function Header() {
  return (
    <section className={header.section}>
      <Container>
        <IMG src={Logo} alt='' className={header.logo} />
      </Container>
    </section>
  );
}

export default Header;
