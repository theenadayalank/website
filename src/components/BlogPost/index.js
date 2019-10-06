import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'prismjs/themes/prism-tomorrow.css';

import './style.scss';
import Layout from './../Layout';
import Footer from './../Footer';

import ArrowBack from './../../assets/svgs/arrow-back.svg';

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
        <ul>
          {prev && (
            <li>
              <Link to={'blog/' + prev.frontmatter.path}>Prev</Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={'blog/' + next.frontmatter.path}>Next</Link>
            </li>
          )}
        </ul>
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
