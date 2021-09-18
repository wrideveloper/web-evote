import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontSize = [16, 25, 35, 50]
const sizeLabel = ['small', 'medium', 'large', 'massive']

class Text extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(sizeLabel).isRequired,
    bold: PropTypes.bool
  }

  render() {
    return <TextContainer {...this.props}>{this.props.value}</TextContainer>
  }
}

const TextContainer = styled.div`
  color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: ${props => fontSize[sizeLabel.indexOf(props.size)]}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`

export default Text
