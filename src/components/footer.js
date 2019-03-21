import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"


const FooterBlock = styled.div`
  shape-outside:  polygon(20% 55%, 40% 75%, 75% 10%, 100% 60%, 100% 100%, 0 100%);
  clip-path:      polygon(20% 55%, 40% 75%, 75% 10%, 100% 60%, 100% 100%, 0 100%);
  background: #2d2d2d;
  color: #fff;
  width: 100vw;
  height: 45vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  a {
    color: #fff;
    background: transparent;
    text-decoration: underline;
  }
  p {
    margin: 0 0 0.5em;
    font-size: 0.8em;
  }
`


const Footer = () => (
  <footer>
    <FooterBlock>
      <p>Site by <a href="https://mjordan.codes">mJordan.codes</a></p>
      <p>Dog Drawings by <a href="https://vecteezy.com">vecteezy.com</a></p>
    </FooterBlock>
  </footer>
)

export default Footer