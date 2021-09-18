import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class SectionTitle extends Component {
  render() {
    return (
      <div align="center">
        <Fade top>
          <Title inverted>
            {this.props.title}
            <Title.Subheader>{this.props.description}</Title.Subheader>
          </Title>
          {this.props.children}
        </Fade>
      </div>
    )
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

SectionTitle.defaultProps = {
  children: ''
}

const Title = styled(Header)`
  margin-bottom: 25px !important;
  font-size: 35px !important;
`

export default SectionTitle
