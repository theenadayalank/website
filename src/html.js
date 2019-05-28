import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Title */}
        <title>Theenadayalan | Front End Engineer</title>
        <link rel="icon" type="image/png" sizes="32x32" href={'/img/favicon-32.png'}></link>

        {/* 
        
          Preload links - need to use rootUrl

        */}
        {/* <link rel="preload" as="image" href={'/img/header-bg.jpg'} />
        <link rel="preload" as="image" href={'/img/profile.jpg'} />
        <link rel="preload" as="font" type="font/ttf" href={'/fonts/Muli-Regular.ttf'} crossOrigin="true" />
        <link rel="preload" as="font" type="font/ttf" href={'/fonts/Roboto-Regular.ttf'} crossOrigin="true" /> */}

        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
