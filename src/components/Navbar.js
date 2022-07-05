import logo from '../assets/images/logo.svg';
import { IconHamburger, IconClose } from '../assets/images';
import styled from 'styled-components';
import useSidebarContext from '../context/sidebar-context';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useSidebarContext();
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <img className="logo" src={logo} alt="logo" />
            <button type="button" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <IconClose /> : <IconHamburger />}
            </button>
          </div>
        </div>
      </Wrapper>
      {sidebar ? <Sidebar toggleDropdown={sidebar} /> : null}
    </>
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

    button {
      transform: scale(1.1);
    }
  }
`;
export default Navbar;
