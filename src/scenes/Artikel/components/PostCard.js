import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

class PostCard extends Component {
  render() {
    return (
      <Card href={this.props.link}>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header>
            <Zoom>{this.props.title}</Zoom>
          </Card.Header>
          <Card.Description>
            <Zoom>{this.props.subtitle}</Zoom>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Zoom>
            <Button basic color='green'>
              Selengkapnya
            </Button>
          </Zoom>
        </Card.Content>
      </Card>
    )
  }
}

export default PostCard
