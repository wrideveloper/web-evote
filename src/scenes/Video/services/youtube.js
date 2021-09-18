import axios from 'axios'

const key = 'AIzaSyBXVXikYz8KMlU6_OUf9hZqpBJJJZc1jIM'
const host = 'https://www.googleapis.com/youtube/v3'
const channelId = 'UCRDuxyMCKmyaX5rRDFo-RCQ'

const getRecentVideos = () => {
	return new Promise((resolve, rejects) => {
		axios
			.get(
				`${host}/search?part=snippet&order=date&channelId=${channelId}&type=video&&key=${key}`
			)
			.then(response => {
				const videos = getVideos(response.data.items)
				resolve(videos)
			})
			.catch(err => rejects(err))
	})
}

const getVideos = videosData => {
	return videosData.map(videoData => ({
		id: videoData.id.videoId,
		title: videoData.snippet.title,
		thumbnail: videoData.snippet.thumbnails.high.url
	}))
}

export { getRecentVideos }

/*
{
	id,
	thumbnailsrc,
	title
}
*/
