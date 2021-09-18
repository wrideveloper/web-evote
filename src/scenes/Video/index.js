import React, { Component, Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import { Players } from './components'

class Video extends Component {
  render() {
    return (
      <Fragment>
        <Section bgImage={require('./images/background.jpg')} strength={200}>
          <SectionTitle
            title="VIDEO KAMI"
            description="Kumpulan video workshop riset informatika">
            <a href="https://www.youtube.com/channel/UCRDuxyMCKmyaX5rRDFo-RCQ">
              <Button
                labelPosition="left"
                color="green"
                size="large"
                icon="youtube"
                content="Selengkapnya"
              />
            </a>
          </SectionTitle>
        </Section>
        <Section>
          <Players />
        </Section>
      </Fragment>
    )
  }
}

export default Video
