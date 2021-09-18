import React, { Component, Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import { Margin, SectionText } from '../../../../components'
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade'

class PenjelasanKomunitas extends Component {
  render() {
    return (
      <Fragment>
        <div align="center">
          <Rotate>
            <Margin bottom={15}>
              <Image src={require('../../images/logo wri.png')} size="small" />
            </Margin>
          </Rotate>

          <Fade top>
            <Header size="huge">Workshop Riset Informatika</Header>
            <SectionText>
              Komunitas yang bertujuan untuk membina dan mengembangkan
              kreativitas mahasiswa di bidang ilmu pengetahuan dan teknologi
            </SectionText>
          </Fade>
        </div>
      </Fragment>
    )
  }
}

export default PenjelasanKomunitas
