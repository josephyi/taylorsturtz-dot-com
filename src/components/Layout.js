import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import FooterBio from '../components/FooterBio'

class Layout extends Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      // header = (
      //   <h1
      //     style={{
      //       ...scale(1),
      //       marginBottom: rhythm(1),
      //       marginTop: 0,
      //       lineHeight: '3rem',
      //       fontFamily: 'Bitter, serif',
      //     }}
      //   >
      //     <Link
      //       style={{
      //         boxShadow: 'none',
      //         textDecoration: 'none',
      //         color: '#36B5A2',
      //       }}
      //       to={'/'}
      //     >
      //       {title}
      //     </Link>
      //   </h1>
      // )
    } else {
      header = (
        <h3
          style={{
            fontSize: rhythm(.5),
            fontFamily: 'Bitter, serif',
            marginTop: 0,
            marginBottom: rhythm(-1.25),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
            }}
            to={'/'}
          >
            👈 Home
          </Link>
        </h3>
      )
    }
    return (
      <Fragment>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(26),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          <hr style={{ marginTop: '2rem' }} />
          <FooterBio />
          <hr style={{ marginTop: '1.5rem' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>👨‍💻 <code>npx taylorsturtz</code></span>
            <div className="socialIcons">
              <a href="https://www.linkedin.com/in/taylorsturtz/" target="_blank" className="mdi mdi-linkedin-box" />
              <a href="https://twitter.com/taylorsturtz" target="_blank" className="mdi mdi-twitter" />
              <a href="https://github.com/tsturtz" target="_blank" className="mdi mdi-github-circle" />
              <a href="https://dev.to/tsturtz" target="_blank" className="mdi mdi-dev-to" />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Layout
