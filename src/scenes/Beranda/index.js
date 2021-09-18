import React, { Component } from 'react'
import { Grid, Button, Image } from 'semantic-ui-react'
import { Section, Margin } from '../../components'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Text from './components/Text'
import Carousel from 'react-owl-carousel2'

class Beranda extends Component {
  carouselOptions = {
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    fallbackEasing: 'flash',
    mouseDrag: false,
    animateOut: 'slideOutDown',
    animateIn: 'bounceInDown'
  }

  render() {
    return (
      <Section bgImage={require('./images/background.jpg')} strength={200}>
        <BerandaGrid columns={2} verticalAlign="middle" doubling>
          <Grid.Column width="7" textAlign="right" only="computer">
            <Fade left>
              <Text value="Ingin Belajar" size="medium" />
            </Fade>
            <Carousel options={this.carouselOptions}>
              <div>
                <Text value="PEMROGRAMAN" size="massive" bold />
              </div>
              <div>
                <Text value="MULTIMEDIA" size="massive" bold />
              </div>
              <div>
                <Text value="NETWORKING" size="massive" bold />
              </div>
            </Carousel>

            <Fade left>
              <Text value="Ayo Gabung dengan WRI" size="medium" />

              <Margin top={30}>
                <Link to="Kontak" smooth offset={-74}>
                  <Button
                    color="green"
                    size="big"
                    labelPosition="left"
                    icon="arrow down"
                    content="Gabung Sekarang"
                  />
                </Link>
              </Margin>
            </Fade>
          </Grid.Column>
          <Grid.Column width="9">
            <Image src={require('./images/ilustration.png')} />
          </Grid.Column>
        </BerandaGrid>
      </Section>
    )
  }
}

const BerandaGrid = styled(Grid)`
  padding-top: 60px !important;
  padding-bottom: 60px !important;
`

export default Beranda
