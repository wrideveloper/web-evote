import React, { Component } from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'
import Carousel from 'react-owl-carousel2'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { getRecentEvents } from '../../services/eventbrite'

class DaftarKegiatan extends Component {
  state = {
    events: []
  }

  carouselOptions = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 15
  }

  componentDidMount() {
    getRecentEvents().then(events => this.setState({ events }))
  }

  renderCarousel() {
    return this.state.events.length > 0 ? (
      <Carousel options={this.carouselOptions}>{this.renderEvents()}</Carousel>
    ) : (
      ''
    )
  }

  renderEvents() {
    return this.state.events.map((event, index) => (
      <Zoom key={index}>
        <a href={event.url}>
          <Image src={event.image} />
          <Header size="tiny">{event.title}</Header>
        </a>
      </Zoom>
    ))
  }

  render() {
    return (
      <Grid columns="2" doubling>
        <Grid.Row>
          <Grid.Column>
            <Header size="large">Kegiatan Mendatang</Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Fade right>
              <a href="https://www.eventbrite.com/o/workshop-riset-informatika-17325715953">
                <Button
                  labelPosition="left"
                  color="green"
                  size="huge"
                  icon="calendar alternate outline"
                  content="Selengkapnya"
                />
              </a>
            </Fade>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="16">{this.renderCarousel()}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default DaftarKegiatan
