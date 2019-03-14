import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import "./styles.css"

import Dog1 from "../assets/dog1.svg"

const nospace = css`
  margin: 0;
`

const block = css`
  display: none;
  color: #fff;
  background: #2d2d2d;
  @media (min-width: 600px) {
    display: initial;
    shape-margin: 5px;
  }
`

const content = css`
  margin: 0;
  padding: 10px;
  @media (min-width: 600px) {
    padding-top: 35vh;
  }
`

const About = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  svg {
    position: absolute;
    top: 88vh;
    right: 5vw;
    width: 25vmin;
    height: 25vmin;

  }
`

const Block1 = styled.div`
  color: #fff;  
  background: #2d2d2d;
  width: 100vw;
  display: flex;
  align-items: center;
  height: 25vh;
  justify-content: center;
  shape-margin: 5px;
  @media (min-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
    float: left;
    shape-outside: polygon(0 0, 0 100%, 100% 0);
    clip-path: polygon(0 0, 0 100%, 100% 0);
    height: 80vh;
    width: 70vw;
  h1 {
    font-size: 3em;
    margin-left: 5vmin;
    margin-top: 10vmin;
  }
  }
`
const Block2 = styled.div`
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  height: 65vh;
  width: 30vw;
`

const Block2b = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  shape-outside: polygon(100% 0, 100% 100%, 54% 100%);
  clip-path: polygon(100% 0, 100% 100%, 54% 100%);
  height: 100vh;
  width: 100vw;
  z-index: -1;
  
`

export default () => (
  <>
    <About id="about">
      <Block1>
        <h1 css={nospace}>Puppies &amp;<br css={block}/> Portfolios</h1>
      </Block1>
      <Block2 css={block}></Block2>
      <Block2b css={block}></Block2b>
      <Dog1 />
        <p css={content}>Puppies and Portfolio Hangout Club Thing is a group started by Jordan to provide a place to share and get help with building awesome portfolios. Come join us to get advice and feedback on design, content, or the code for creating your super cool online home. Or just hang out and get some work done with the social pressures of actually having to work because you are around other people who are working. </p>
    </About>
  </>
)
