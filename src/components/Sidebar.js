import styled from 'styled-components';
import { productLinks, companyLinks, connectLinks } from '../utils';
import arrowDark from '../assets/images/icon-arrow-dark.svg';
import { Divider, Grid } from '@chakra-ui/react';
import { ArrowDark } from '../assets/images';
import useSidebarContext from '../context/sidebar-context';

const Sidebar = ({ toggleSidebar }) => {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <Wrapper className={isSidebarOpen ? 'show' : ''}>
      <div className="product sidebar-links">
        <button type="button">
          Product <span>{<ArrowDark />}</span>
        </button>
        <div className="dropdown">
          <ul>
            {productLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="company sidebar-links">
        <button type="button">
          Company <span>{<ArrowDark />}</span>
        </button>
        <div className="dropdown">
          <ul>
            {companyLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="connect sidebar-links">
        <button type="button">
          Connect <span>{<ArrowDark />}</span>
        </button>
        <div className="dropdown">
          <ul>
            {connectLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Divider />
      <Grid marginTop={'1.5em'}>
        <button type="button" className="login-btn">
          Login
        </button>
        <button type="button" className="signup-btn">
          Sign Up
        </button>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: absolute;
  top: 7rem;
  left: 1.4rem;
  width: 90%;
  background: var(--clr-white);
  color: var(--clr-heading);
  display: grid;
  margin: 0 auto;
  text-align: center;
  padding: 1.5em 1.5em;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-1);
  transition: var(--transition);
  z-index: 999;
  /* transform: scale(0); */

  button {
    font-size: 1.2rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 1em;

    span {
      margin-top: 0.3em;
    }
  }

  .sidebar-links {
    width: 100%;
    margin: 0.8em 0;

    .dropdown {
      width: 100%;
      background: var(--clr-grayish-blue);
      border-radius: var(--border-radius);
      padding: 1em 0;
      display: none;

      ul {
        li {
          text-transform: capitalize;
          margin: 0.8em 0;
          font-size: 1.1rem;
          font-weight: 600;
          opacity: 0.8;
        }
      }
    }
  }

  .connect {
    margin-bottom: 2em;
  }

  .login-btn {
    display: block;
    margin-bottom: 0;
  }

  .signup-btn {
    background: linear-gradient(
      to left,
      hsl(353, 100%, 62%),
      hsl(13, 100%, 72%)
    );
    padding: 0.9em 1em;
    display: block;
    width: 10rem;
    margin: 1em auto 0.9em;
    font-family: var(--ff-headingFont);
    border-radius: 27px;
    line-height: 1;
    transition: var(--transition);
    color: var(--clr-white);
  }
`;

export default Sidebar;
