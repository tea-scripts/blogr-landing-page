import logo from '../assets/images/logo.svg';
import { ReactComponent as MenuBtn } from '../assets/images/icon-hamburger.svg';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button>
            <MenuBtn />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: grid;
  align-items: center;
  padding: 2em 1em;

  .nav-header {
    display: flex;
    justify-content: space-between;
  }
`;
export default Navbar;
