import styled from 'styled-components'

const Margin = styled.div`
  margin-top: ${props => (props.top ? props.top : 0)}px;
  margin-bottom: ${props => (props.bottom ? props.bottom : 0)}px;
  margin-left: ${props => (props.left ? props.left : 0)}px;
  margin-right: ${props => (props.right ? props.right : 0)}px;
`

export default Margin
