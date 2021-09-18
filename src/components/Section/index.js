import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

class Section extends Component {
  static propTypes = {
    bgImage: PropTypes.string,
    bordered: PropTypes.bool,
    fluid: PropTypes.bool
  }

  render() {
    return (
      <Parallax bgImage={this.props.bgImage}>
        <InnerContainer fluid={this.props.fluid}>
          {this.props.children}
        </InnerContainer>
      </Parallax>
    )
  }
}

const Parallax = styled.div`
  background:
  ${props =>
    props.bgImage === undefined
      ? ''
      : 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))'},
    url("${props => props.bgImage}");  
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const InnerContainer = styled(Container)`
  padding: ${props => (props.fluid ? 30 : 0)}px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: ${props =>
    props.bordered ? 'dashed 2px #a3a3a3 !important' : ''};
`

export default Section
