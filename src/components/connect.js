import React from "react"
import styled from "@emotion/styled"

const Conversation = styled.h3`
  text-align: left;
  color: #dadada;
  margin: 0;
  font-size: 2.5em;
  padding: 10px;
  @media (min-width: 600px) {
    font-size: 4em;
    padding-left: 5vw;
  }
`
const Paragraph = styled.p`
  margin: 0;
  padding: 10px;
  @media (min-width: 600px) {
    padding-left: 10vw;
  }
`

const ConnectSection = () => (
  <div id="connect">
    <Conversation>Join the Conversation</Conversation>
    <Paragraph>Join us on <a href="http://bit.ly/pupsandports" target="_blank">Slack</a> to share resources, get help, or request feedback during the week. </Paragraph>
  </div>
)

export default ConnectSection