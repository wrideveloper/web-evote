import React, { Component, Fragment } from 'react'
import Carousel from 'react-owl-carousel2'
import Divisi from '../Divisi'

class PenjelasanDivisi extends Component {
  carouselOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 0
  }

  divisi = [
    {
      name: 'Pemrograman',
      description:
        'Divisi pemrograman fokus terhadap pengembangan aplikasi dalam berbagai platform seperti web, mobile, dan desktop menggunakan bahasa pemrograman populer',
      image: require('../../images/pemograman.png'),
      subdivisi: [
        { name: 'Web App', icon: 'globe' },
        { name: 'Mobile App', icon: 'mobile alternate' },
        { name: 'Game', icon: 'game' }
      ]
    },
    {
      name: 'Multimedia',
      description:
        'Divisi multimedia merupakan divisi yang fokus terhadap desain dan analisa user interface, serta dalam pembuatan aset game',
      image: require('../../images/multimedia.png'),
      subdivisi: [
        { name: 'Desain UI', icon: 'list layout' },
        { name: 'Desain 3D', icon: 'box' },
        { name: 'Aset Game', icon: 'game' }
      ]
    },
    {
      name: 'Networking',
      description:
        'Divisi jaringan merupakan divisi yang merancang arsitektur jaringan dan internet of things',
      image: require('../../images/network.png'),
      subdivisi: [
        { name: 'Internet of Thing', icon: 'wifi' },
        { name: 'Raspberry', icon: 'microchip' },
        { name: 'Linux', icon: 'linux' }
      ]
    }
  ]

  renderItem() {
    return this.divisi.map((item, index) => (
      <Divisi
        key={index}
        image={item.image}
        name={item.name}
        description={item.description}
        subdivisi={item.subdivisi}
      />
    ))
  }

  render() {
    return (
      <Fragment>
        <Carousel options={this.carouselOptions}>{this.renderItem()}</Carousel>
      </Fragment>
    )
  }
}

export default PenjelasanDivisi
