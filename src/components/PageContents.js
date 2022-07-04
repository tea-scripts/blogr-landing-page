import styled from 'styled-components';
import { Grid, GridItem } from '@chakra-ui/react';
import { EditorMobile } from '../assets/images';
import phones from '../assets/images/illustration-phones.svg';

const PageContents = () => {
  return (
    <Wrapper className="page">
      <h2>Designed for the future</h2>
      <Grid gap={20}>
        <GridItem justifyContent={'center'} w={'100%'}>
          <EditorMobile style={{ margin: '0 auto' }} />
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
          <div className="container">
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
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 5em;

  & > h2 {
    margin-bottom: 2em !important;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--clr-heading);
    margin: 2em auto 0.5em;

    span {
      display: block;
    }
  }

  p {
    letter-spacing: 1px;
    font-size: 0.85rem;
    line-height: 2;
    max-width: 21em;
    margin: 0 auto;
    font-family: var(--ff-headingFont);
    color: var(--clr-VD-grayish-blue);
  }

  .peach {
    background: var(--clr-desaturated-blue);
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    margin-top: 10em;
  }

  .img-container {
    position: absolute;
    top: -28%;
  }

  .text-container {
    margin-top: 10em;
  }

  .container {
    color: var(--clr-white);
    height: 630px;
    width: 420px;
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
      max-width: 15rem;
      margin: 1.2em auto 0;
      color: var(--clr-grayish-blue-footer);
    }
  }
`;

export default PageContents;
