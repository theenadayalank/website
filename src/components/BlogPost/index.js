import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'prismjs/themes/prism-tomorrow.css';

import './style.scss';

import Layout from './../Layout';
import Footer from './../Footer';

import ArrowBack from './../../assets/svgs/arrow-back.svg';
import LeftArrow from './../../assets/svgs/left-arrow.svg';
import RightArrow from './../../assets/svgs/right-arrow.svg';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computedProgressBarWidth : 0
    };
  }

  componentDidMount() {
    this._calculateBlogOffsetHeight = this.calculateBlogOffsetHeight.bind(this);
    window.addEventListener('scroll', this._calculateBlogOffsetHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calculateBlogOffsetHeight);
  } 

  calculateBlogOffsetHeight () {
    let { computedProgressBarWidth = 0 }  = this.state;
    let windowOffsetHeight = document.documentElement.scrollTop || document.body.scrollTop;
    let headerHeight = document.getElementById('nav-header').offsetHeight;

    // set progress bar width as zero if the scroll top value is lesser than the header height
    if(windowOffsetHeight <= headerHeight) {
      this.setState({
        computedProgressBarWidth : 0
      });
      return;
    }

    // set progress bar width as 100 if the scroll top value is greater than the content height
    let blogPostHeight = document.getElementById('blog-post-container').offsetHeight;
    if((windowOffsetHeight - headerHeight) >= blogPostHeight) {
      this.setState({
        computedProgressBarWidth : 100
      });
      return;
    }

    computedProgressBarWidth = ((windowOffsetHeight - headerHeight) / blogPostHeight) * 100;
    // console.log(computedProgressBarWidth);
    this.setState({
      computedProgressBarWidth
    });
  }

  render() {
    const {data, pageContext} = this.props;
    const { prev, next } = pageContext;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
      <Layout>
        <Helmet title={frontmatter.title} />
        <div className="progress-container">
          <span className="progress-bar" style={{ width: `${this.state.computedProgressBarWidth}%` }}></span>
        </div>
        <div className="mx-auto blog-post-container" id="blog-post-container">
          <div className="all-post-link">
            <ArrowBack className="icon-xxs icon-link mr-1 va-baseline" />
            <Link to="blog/">All Posts</Link>
          </div>
          <div className="blog-post">
            <h2>{frontmatter.title}</h2>
            <p className="text-muted">{frontmatter.date}</p>
            <article
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <div className="blog-post-footer">
            Have any questions or comments about this post? Email me at{' '}
            <a href="mailto:puduvai.theena@gmail.com">puduvai.theena@gmail.com</a>{' '}
            or contact me on Twitter at{' '}
            <a href="https://twitter.com/theenadayalan_k" target="_blank" rel="noopener noreferrer">
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
  }
}

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


export default BlogPost;
