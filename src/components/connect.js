import React from "react"
import styled from "@emotion/styled"

const Conversation = styled.h3`
  font-size: 4em;
  color: #dadada;
  padding-left: 5vw;
  margin: 0;
`
const Paragraph = styled.p`
  padding-left: 10vw;
  margin: 0;
`

const ConnectSection = () => (
  <div id="connect">
    <Conversation>Join the Conversation</Conversation>
    <Paragraph>Join us on <a href="http://bit.ly/pupsandports" target="_blank">Slack</a> to share resources, get help, or request feedback during the week. </Paragraph>
  </div>
)

export default ConnectSection