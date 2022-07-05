import styled from 'styled-components';
import { Grid, GridItem } from '@chakra-ui/react';
import phones from '../assets/images/illustration-phones.svg';
import editor from '../assets/images/illustration-editor-mobile.svg';
import laptop from '../assets/images/illustration-laptop-mobile.svg';

const PageContents = () => {
  return (
    <Wrapper className="page">
      <h2>Designed for the future</h2>
      <Grid gap={20}>
        <GridItem justifyContent={'center'} w={'100%'}>
          <div className="editor-container">
            <img src={editor} alt="illustration editor" />
          </div>
          <h2>
            Introducing an <span>extensible editor</span>
          </h2>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h2>
            Robust content <span>management</span>
          </h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </GridItem>
        <GridItem className="peach">
          <div className="phone-container">
            <div className="img-container">
              <img src={phones} alt="" />
            </div>
            <div className="text-container">
              <h2>
                State of the Art <span>Infrastructure</span>
              </h2>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </GridItem>
        <GridItem justifyContent={'center'} w={'100%'}>
          <div className="laptop-container">
            <img src={laptop} alt="illustration laptop" />
          </div>
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5em;

  & > h2 {
    margin-bottom: 2em !important;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-heading);
    margin: 1.2em auto 0.5em;

    span {
      display: block;
    }
  }

  p {
    letter-spacing: 1px;
    font-size: 1rem;
    line-height: 2;
    max-width: 22em;
    margin: 0 auto;
    font-family: var(--ff-headingFont);
    color: var(--clr-VD-grayish-blue);
  }

  .editor-container,
  .laptop-container {
    width: 100%;
    height: 350px;

    img {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .peach {
    background: var(--clr-desaturated-blue);
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    margin-top: 10em;
  }

  .text-container {
    margin-top: 10em;
  }

  .phone-container {
    color: var(--clr-white);
    height: 630px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-bottom: 1em;

    h2 {
      font-size: 2rem;
      color: var(--clr-white);

      span {
        display: block;
      }
    }

    p {
      font-family: var(--ff-headingFont);
      font-weight: 400;
      max-width: 22rem;
      margin: 1.2em auto 0;
      color: var(--clr-grayish-blue-footer);
    }

    .img-container {
      position: absolute;
      top: -32%;
    }
  }

  @media (min-width: 420px) {
    .phone-container {
      width: 420px;
    }
  }
`;

export default PageContents;
