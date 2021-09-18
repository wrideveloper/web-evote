import axios from 'axios'
const host = 'https://medium-cors-feed.herokuapp.com/feed'
const image = 'https://cdn-images-1.medium.com/max/800'
const publication = 'https://medium.com/wripolinema'

const getRecentPosts = () => {
  return new Promise((resolve, rejects) => {
    axios
      .get(host)
      .then(response => {
        const images = getPosts(response.data.response)
        resolve(images)
      })
      .catch(err => {
        rejects(err)
      })
  })
}

const getPosts = postsData => {
  return postsData
    .map(postData => {
      return {
        title: postData.title,
        subtitle: postData.content.subtitle,
        image: `${image}/${postData.virtuals.previewImage.imageId}`,
        link: `${publication}/${postData.id}`
      }
    })
    .slice(0, 9)
}

export { getRecentPosts }
