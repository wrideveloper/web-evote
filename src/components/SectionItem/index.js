import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

const SectionItem = ({
  title,
  icon,
  description,
  color,
  size,
  circular,
  inverted
}) => (
  <Header size={size} inverted={inverted}>
    <Icon name={icon} circular={circular} color={color} inverted={inverted} />

    <Header.Content>
      <Zoom>
        {title}
        <Header.Subheader>{description}</Header.Subheader>
      </Zoom>
    </Header.Content>
  </Header>
)

export default SectionItem
