import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'

import { Navigation } from './components'
import {
  Beranda,
  Profil,
  Kegiatan,
  Foto,
  Video,
  Footer,
  Artikel
} from './scenes'

class App extends Component {
  menu = ['Beranda', 'Profil', 'Kegiatan', 'Foto', 'Artikel', 'Video', 'Kontak']

  scenes = [
    <Beranda />,
    <Profil />,
    <Kegiatan />,
    <Foto />,
    <Artikel />,
    <Video />,
    <Footer />
  ]

  renderScenes() {
    return this.scenes.map((scene, index) => (
      <Element id={this.menu[index]} key={index}>
        {scene}
      </Element>
    ))
  }

  render() {
    return (
      <Fragment>
        <Navigation menu={this.menu} />
        {this.renderScenes()}
      </Fragment>
    )
  }
}

export default App
