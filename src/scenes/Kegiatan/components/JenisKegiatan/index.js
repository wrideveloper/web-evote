import React, { Component } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class JenisKegiatan extends Component {
  render() {
    return (
      <Grid columns={4} stackable>
        <Grid.Row divided centered>
          <Grid.Column>
            <SectionItem
              title="Miniclass"
              description="Mempelajari hal dasar dari masing - masing divisi"
              icon="users"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Open Talk"
              description="Meetup bulanan untuk berdiskusi seputar dunia IT"
              icon="volume up"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Workshop"
              description="Meningkatkan skill dengan praktek langsung"
              icon="laptop"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Membuat Produk"
              description="Mengimplementasikan skill yang dimiliki lewat produk"
              icon="window maximize outline"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default JenisKegiatan
