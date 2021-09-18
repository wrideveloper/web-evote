import axios from 'axios'

const host = 'https://api.instagram.com/v1'
const access_code = '3311524260.39bf8d7.2663676c079841c58729295d0262e43b'

const getRecentPhotos = () => {
	return new Promise((resolve, rejects) => {
		axios
			.get(
				`${host}/users/self/media/recent/?count=9&access_token=${access_code}`
			)
			.then(response => {
				const images = getImages(response.data.data)
				resolve(images)
			})
			.catch(err => {
				rejects(err)
			})
	})
}

const getImages = imagesData => {
	return imagesData.map(imageData => {
		const { width, height, url } = imageData.images.standard_resolution
		return {
			src: url,
			width,
			height,
			link: imageData.link
		}
	})
}

export { getRecentPhotos }
