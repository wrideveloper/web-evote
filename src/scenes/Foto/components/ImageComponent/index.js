import React from 'react'
import Zoom from 'react-reveal/Zoom'

const imgStyle = {
	transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
}

const cont = {
	backgroundColor: '#eee',
	cursor: 'pointer',
	overflow: 'hidden',
	position: 'relative'
}

const adjustPosition = (direction, left, top) => {
	if (direction === 'column') {
		cont.position = 'absolute'
		cont.left = left
		cont.top = top
	}
}

const ImageComponent = ({ index, photo, margin, direction, top, left }) => {
	adjustPosition(direction, left, top)
	return (
		<Zoom>
			<div
				style={{ margin, height: photo.height, width: photo.width, ...cont }}
				className={!photo.selected ? 'not-selected' : ''}>
				<a href={photo.link}>
					<img style={{ ...imgStyle }} {...photo} alt={index} />
				</a>
				<style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
			</div>
		</Zoom>
	)
}

export default ImageComponent
