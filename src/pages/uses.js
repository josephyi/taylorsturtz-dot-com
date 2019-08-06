import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import 'typeface-bitter'

import { rhythm } from '../utils/typography'
import FooterBio from '../components/FooterBio'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class UsesPage extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location} style={{ background: 'black' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Bitter, serif' }}>
          I'm not influential enough to have a /uses page 🙃
        </h1>
      </Layout>
    )
  }
}

export default UsesPage
