module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans Condensed', 'Fredericka the Great']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/members`,
        name: "member-markdown",
      },
    },  
  ],
}