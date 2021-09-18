import React, { Component, Fragment } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import PostCard from './components/PostCard'
import { getRecentPosts } from './services/medium'

class Artikel extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    getRecentPosts().then(posts => this.setState({ posts }))
  }

  renderPosts() {
    return this.state.posts.map((post, index) => (
      <PostCard key={index} {...post} />
    ))
  }

  render() {
    return (
      <Fragment>
        <Section bgImage={require('./images/background.jpg')} strength={200}>
          <SectionTitle
            title='ARTIKEL KAMI'
            description='Kumpulan artikel workshop riset informatika'>
            <a href='https://medium.com/wripolinema'>
              <Button
                labelPosition='left'
                color='green'
                size='large'
                icon='medium'
                content='Selengkapnya'
              />
            </a>
          </SectionTitle>
        </Section>
        <Section>
          <Card.Group centered doubling itemsPerRow='3'>
            {this.renderPosts()}
          </Card.Group>
        </Section>
      </Fragment>
    )
  }
}

export default Artikel
