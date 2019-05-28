import React from 'react';
import { graphql, Link } from 'gatsby';

import './style.scss';
import Layout from './../../components/Layout';

// import { ReactComponent as DownloadIcon } from './svgs/download.svg';
// import Loader from '../../components/Loader';

const Blog = ({data}) => {
  let posts = data.allMarkdownRemark.edges;
  return(
      <section>
        <Layout>
          <header className="blog-header w-900 mx-auto px-5 text-center">
            <h3 className="text-prim">THEENADAYALAN</h3>
            <p>Front End Engineer</p>
            <a className="btn btn-sm btn-light" href="/Theenadayalan.pdf" target="_blank">
              {/* <DownloadIcon className="icon" /> &nbsp; */}
              Download Resume 
            </a>
          </header>

          <div className="blog-container w-900 mx-auto px-3">
            {
              posts.map(({ node: post }, index) => {
                return (
                  <div key={index} className="blog-item">
                    <Link to={'/blog/' + post.frontmatter.path} className="blog-title">
                      {post.frontmatter.title}
                    </Link>
                    <p className="small text-muted">May 24, 2018</p>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })
            }
          </div>
        </Layout>
      </section>
  )
  
}

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { 
        order: DESC, 
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250, format: PLAIN)
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`

export default Blog;