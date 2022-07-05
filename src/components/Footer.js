import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { productLinks, companyLinks, connectLinks } from '../utils';

const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <div className="product footer-links">
        <h4>Product</h4>
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
      <div className="company footer-links">
        <h4>Company</h4>
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
      <div className="connect footer-links">
        <h4>Connect</h4>
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
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
  background: var(--clr-VD-black-blue);
  color: var(--clr-grayish-blue-footer);
  border-top-right-radius: 105px;
  padding: 5em;
  font-family: var(--ff-headingFont);

  .footer-links {
    font-size: 1.2rem;
    text-align: center;

    h4 {
      color: var(--clr-white);
      margin: 3rem auto 1.5rem;
    }

    ul li {
      text-transform: capitalize;
      padding: 0.2rem 0;
    }
  }
`;

export default Footer;
