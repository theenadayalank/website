import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'prismjs/themes/prism-tomorrow.css';

import './style.scss';

import Layout from './../Layout';
import Footer from './../Footer';

import ArrowBack from './../../assets/svgs/arrow-back.svg';
import LeftArrow from './../../assets/svgs/left-arrow.svg';
import RightArrow from './../../assets/svgs/right-arrow.svg';

const Template = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet title={frontmatter.title} />
      <div className="mx-auto blog-post-container">
        <div className="all-post-link">
          <ArrowBack className="icon-xxs icon-link mr-1 va-baseline" />
          <Link to="blog/">All Posts</Link>
        </div>
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <p className="text-muted">{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <div className="blog-post-footer">
          Have any questions or comments about this post? Email me at{' '}
          <a href="mailto:puduvai.theena@gmail.com">puduvai.theena@gmail.com</a>{' '}
          or contact me on Twitter at{' '}
          <a href="https://twitter.com/theenadayalan_k" target="_blank">
            @theenadayalan_k
          </a>
          .
        </div>

        <div className="d-flex justify-content-between blog-pagination">
          <div>
            {prev && (
              <Link className="previous" to={'blog/' + prev.frontmatter.path}>
                <LeftArrow className="svg icon-sm icon-white" /> &nbsp; Previous
                Blog
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link className="next" to={'blog/' + next.frontmatter.path}>
                <RightArrow className="svg icon-sm icon-white" /> &nbsp; Next
                Blog
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query allBlogPostQuery($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default Template;
