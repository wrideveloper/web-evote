import React, { Component } from 'react'
import { SectionItem, SectionText, Margin } from '../../../../components'
import { Header, Image, Grid } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import PropTypes from 'prop-types'

class Divisi extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    subdivisi: PropTypes.array
  }

  render() {
    return (
      <div>
        <div align="center">
          <Rotate>
            <Image src={this.props.image} size="small" />
          </Rotate>

          <Margin top={15} bottom={25}>
            <Fade top>
              <Header size="huge" content={this.props.name} />
              <SectionText>{this.props.description}</SectionText>
            </Fade>
          </Margin>
        </div>

        <Grid columns={3} doubling>
          {this.props.subdivisi.map((subdivisi, index) => (
            <Grid.Column key={index}>
              <SectionItem
                title={subdivisi.name}
                icon={subdivisi.icon}
                size="small"
                circular
              />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    )
  }
}

export default Divisi
