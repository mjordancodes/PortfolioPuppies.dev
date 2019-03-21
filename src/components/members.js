import React from "react"
import { graphql, StaticQuery } from 'gatsby';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from 'gatsby-image'

import Member from './member'

import Dog3 from "../assets/dog3.svg"

const avatar = css`
  width: 75px;
  height: 75px;
  /* border-radius: 100%; */
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

const Section = styled.section`
  > svg {
    position: absolute;
    top: 65vh;
    right: 1vw;
    width: 20vmin;
    height: 20vmin;
  }
`

const Info = styled.p`
  text-align: right;
`

const Block5 = styled.div`
  /* float: left; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  shape-outside: polygon(0 0, 0 100%, 100% 0);
  clip-path: polygon(0 0, 0 100%, 100% 0);
  width: 90vw;
  height: 25vh;
`

const Block6 = styled.div`
  float: right;
  shape-outside: polygon(100% 10%, 100% 100%, 20% 80%);
  clip-path: polygon(100% 10%, 100% 100%, 20% 80%);
  height: 100vh;
  width: 20vw;
`

const MemberList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 25px;
  max-width: 1399px;
  width: 75vw;
  margin: 0 0 0 5vw;
  padding-top: 25vh;
  @media (min-width: 907px) {
    padding-top: 15vh;
    li:first-of-type {
      grid-column-start: 2;
    }
  }
  @media (min-width: 1300px) {
    /* padding-top: 10vh; */
    li:first-of-type {
      grid-column-start: 3;
    }
    li:nth-of-type(2) {
      grid-column-start: 2;
    }
  }
`

const WhoSection = () => (
  <StaticQuery
    query={graphql`
      query MemberList {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              layout: {
                eq: "member"
              }
            }
          },
          sort: {
            fields: [frontmatter___name], order: ASC
          }
        ) {
          edges {
            node {
              frontmatter {
                name
                img {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                } 
                website
                github
                twitter
              }
            }
          }
        }
      }  
    `}
    render={data => (
      <Section id="about">
        <Block5 css={block} />
        <Block6 css={block} />
        <Dog3  css={block}/>

        <MemberList>
          {data.allMarkdownRemark.edges.map(member => (
            <Member
              name={member.node.frontmatter.name}
              website={member.node.frontmatter.website}
              github={member.node.frontmatter.github}
              twitter={member.node.frontmatter.twitter}
            >
              <Img css={avatar} fixed={member.node.frontmatter.img.childImageSharp.fixed} />
            </Member>
          ))}
        </MemberList>

        <Info>
          Have you been to at least one hangout? <br />
          Jump on <a href="https://github.com/mjordancodes/PortfolioPuppies.dev" target="_blank">github</a> and add yourself as a <br />
          member!
          </Info>
      </Section>
    )}
  />

  
)


export default WhoSection