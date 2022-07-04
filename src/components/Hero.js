import styled from 'styled-components';
import heroImage from '../assets/images/bg-pattern-intro-mobile.svg';

const Hero = () => {
  return (
    <Wrapper className="hero">
      <div>
        <h1>
          A modern <span>publishing platform</span>{' '}
        </h1>
        <p>Grow your audience and build your online brand</p>
      </div>
      <div className="btn-container">
        <button className="white-cta">Start for Free</button>
        <button className="transparent-cta">Learn More</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 70vh;
  width: 100%;
  margin-top: -5rem;
  border-bottom-left-radius: 7em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--clr-white);
  background: linear-gradient(
      to top,
      hsla(353, 100%, 62%, 0.9),
      hsla(13, 100%, 72%, 0.98)
    ),
    url(${heroImage}) no-repeat center center;
  background-position: 31% 35%;

  h1 {
    font-size: 3rem;

    span {
      display: block;
    }
  }

  p {
    color: var(--clr-white);
    font-family: var(--ff-headingFont);
    font-size: 1.3rem;
    display: block;
    max-width: 22rem;
    margin: 0.5em auto;
    opacity: 0.8;
    font-weight: 400;
  }

  .btn-container {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    button {
      padding: 0.9em 1em;
      font-weight: bolder;
      font-size: 1.1rem;
      display: block;
      font-family: var(--ff-headingFont);
      border-radius: 27px;
      line-height: 1;
    }
  }

  .white-cta {
    background: var(--clr-white);
    color: var(--clr-light-red);
  }

  .transparent-cta {
    border: 0.1em solid var(--clr-white);
  }
`;

export default Hero;
