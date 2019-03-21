import React from "react"
import { graphql, StaticQuery } from 'gatsby';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from 'gatsby-image'

import Member from './member'

// import Dog2 from "../assets/dog2.svg"

const avatar = css`
  width: 75px;
  height: 75px;
  /* border-radius: 100%; */
`

const MemberList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
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
      <section id="about">
        WHO
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
      </section>
    )}
  />

  
)


export default WhoSection