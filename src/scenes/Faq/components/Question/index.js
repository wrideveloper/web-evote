import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Question extends Component {
  render() {
    return (
      <Zoom>
        <Header>
          <Icon name="question circle outline" />
          <Header.Content>{this.props.question}</Header.Content>
        </Header>
        <Answer>{this.props.answer}</Answer>
      </Zoom>
    )
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

const Answer = styled.p`
  font-size: 14px;
`

export default Question
