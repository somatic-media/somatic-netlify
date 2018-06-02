import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
      <div className="content container">
            <h1 className="has-text-weight-bold is-size-2 margin-bot-40">Welcome To Mums' Local Quarter</h1>
      </div>
      <div className="container tile is-parent">
          {posts
            .map(({ node: post }) => (
              <div
                className="content tile"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
              <div className="card-image">
                <figure>
                  <img src={post.frontmatter.image} />
                </figure>
              </div>
              <div className="card-content">  
              <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-primary" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
