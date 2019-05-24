const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/components/BlogPost/index.js');
    resolve(
      graphql(
        `
        query {
          allMarkdownRemark (
            sort: { 
              order: DESC, 
              fields: [frontmatter___date]
            }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  title
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((post, index) => {
          const path = post.node.frontmatter.path;
          createPage({
            path: `blog/${path}`,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
          })
          resolve();
        })
      })
    )
  })
}