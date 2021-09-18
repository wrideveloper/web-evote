import React, { Component, Fragment } from 'react'
import Youtube from 'react-youtube'
import { Image, Header, Modal } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import Carousel from 'react-owl-carousel2'

import { getRecentVideos } from '../../services/youtube'

class Players extends Component {
  state = {
    videos: [],
    active_video: '',
    autoplay: 0,
    isOpen: false
  }

  carouselOptions = {
    items: 3,
    rewind: true,
    autoplay: true,
    margin: 5
  }

  componentDidMount() {
    getRecentVideos().then(videos =>
      this.setState({ videos, active_video: videos[0] })
    )
  }

  renderCarousel() {
    return this.state.videos.length > 0 ? (
      <Carousel options={this.carouselOptions}>
        {this.renderThumbnails()}
      </Carousel>
    ) : (
      ''
    )
  }

  renderThumbnails() {
    return this.state.videos.map((video, index) => (
      <Zoom key={index}>
        <div onClick={() => this.changeActiveVideo(video)}>
          <Image src={video.thumbnail} />
          <Header size="tiny">{video.title}</Header>
        </div>
      </Zoom>
    ))
  }

  changeActiveVideo(video) {
    this.setState({ active_video: video, autoplay: 1, isOpen: true })
  }

  closeModal() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Fragment>
        <Modal
          size="small"
          open={this.state.isOpen}
          dimmer="blurring"
          onClose={() => this.closeModal()}>
          <Modal.Content>
            <YoutubePlayer
              videoId={this.state.active_video.id}
              opts={{
                playerVars: {
                  autoplay: this.state.autoplay
                }
              }}
            />
          </Modal.Content>
        </Modal>
        {this.renderCarousel()}
      </Fragment>
    )
  }
}

const YoutubePlayer = styled(Youtube)`
  width: 100%;
  min-height: auto;
`

export default Players
