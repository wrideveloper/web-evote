import React, { Component, Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import Gallery from 'react-photo-gallery'
import ImageComponent from './components/ImageComponent'

import { getRecentPhotos } from './services/instagram'

class Foto extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    getRecentPhotos().then(photos => this.setState({ photos }))
  }

  render() {
    return (
      <Fragment>
        <Section bgImage={require('./images/background.jpg')} strength={1000}>
          <SectionTitle
            title="FOTO KEGIATAN"
            description="Kumpulan foto workshop riset informatika">
            <a href="https://www.instagram.com/wri_polinema/">
              <Button
                labelPosition="left"
                color="green"
                size="large"
                icon="instagram"
                content="Selengkapnya"
              />
            </a>
          </SectionTitle>
        </Section>
        <Section>
          <Gallery
            photos={this.state.photos}
            columns={3}
            margin={5}
            ImageComponent={ImageComponent}
          />
        </Section>
      </Fragment>
    )
  }
}

export default Foto
