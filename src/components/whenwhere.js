import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Dog2 from "../assets/dog2.svg"

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

const Section = styled.section`
  svg {
    position: absolute;
    top: 65vh;
    left: 10vw;
    width: 45vmin;
    height: 45vmin;
  }
`

const Block1 = styled.div`
  float: left;
  shape-outside: polygon(0 0, 0 100%, 100% 60%);
  clip-path: polygon(0 0, 0 100%, 100% 60%);
  width: 54vw;
  height: 100vh;
`

const Block1b = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  shape-outside: polygon(0 0, 0 100%, 100% 100%);
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  width: 90vw;
  height: 100vh;
`

const Block2 = styled.div`
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 0);
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  height: 95vh;
  width: 46vw;
`

const Title = styled.h2`
  font-size: 3em;
  margin: 0;
  writing-mode: vertical-rl;
  padding-bottom: 2em;
  transform: rotate(180deg);
`

const WhenSection = () => (
  <Section id="about">
    <Block1 css={block}>
      <Title>When &amp; Where</Title>
    </Block1>
    <Block1b css={block} />
    <Block2 css={block} />
    <Dog2  css={block}/>
    <h2>When &amp; Where?</h2>
    <p css={content}>We meet every Sunday from 1:00 - 5:00 pm at <a href="https://luckylab.com/quimby-beer-hall/" target="_blank" rel="noopener noreferrer">Lucky Labrador on Quimby</a> in downtown Portland.</p>
  </Section>
)

export default WhenSection