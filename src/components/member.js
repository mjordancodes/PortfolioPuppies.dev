import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"
import { FaGithub, FaTwitter } from 'react-icons/fa';

// import Dog2 from "../assets/dog2.svg"

const Card = styled.li`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-gap: 10px;
  background: rgba(0,0,0,0.05);
  padding: 10px;
  a {
    color: #2d2d2d;
  }
`
const Website = styled.a`
  display: block;
  font-size: 0.75em;
  &:hover {
    color: #0B7499;
  }
`
const Social = styled.div`
  a:not(:first-of-type) {
    padding-left: 10px;
  }
  a:hover {
    color: #0B7499;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Member = ({children, name, website, github, twitter}) => (
  <Card>
    {/* <img src={img} alt={name} /> */}
    {children}
    <Info>
      {name}
      <Website href={website} target="_blank" rel="noopener noreferrer">{website.replace('https://', '').replace('http://', '').replace('www.', '')}</Website>
      <Social>
        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        ) : (
          <i/>
        )}
        {twitter ? (
          <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        ) : (
          <i/>
        )}
      </Social>
    </Info>
  </Card>
)

export default Member