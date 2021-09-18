import React, { Component, Fragment } from 'react'
import { Section } from '../../components'
import { JenisKegiatan, DaftarKegiatan } from './components'

class Kegiatan extends Component {
	render() {
		return (
			<Fragment>
				<Section bgImage={require('./images/background.jpg')} strength={200}>
					<JenisKegiatan />
				</Section>
				<Section>
					<DaftarKegiatan />
				</Section>
			</Fragment>
		)
	}
}

export default Kegiatan
