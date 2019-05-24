import React from 'react';
import { graphql, Link } from 'gatsby';

import './style.scss';
import Layout from './../../components/Layout';

// import { ReactComponent as DownloadIcon } from './svgs/download.svg';
// import Loader from '../../components/Loader';

function openExternalLink( url = '') {
  window.open(url, '_blank');
}


const Blog = ({data}) => {
  let posts = data.allMarkdownRemark.edges;
  let domainName = window.origin;
  return(
      <section>
        <Layout>
          <header className="blog-header w-900 mx-auto px-5 text-center">
            <h3 className="text-prim">THEENADAYALAN</h3>
            <p>Front End Engineer</p>
            <button className="btn btn-sm btn-light" onClick={() => {openExternalLink(`${domainName}/Theenadayalan.pdf`)} }>
              {/* <DownloadIcon className="icon" /> &nbsp; */}
              Download Resume
            </button>
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