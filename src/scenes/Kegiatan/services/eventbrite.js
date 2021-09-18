import axios from 'axios'

const host = 'https://www.eventbriteapi.com/v3'
const token = 'AV3EBESYMDGO54OLKPIU'

const getRecentEvents = () => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        `${host}/organizers/17325715953/events/?order_by=created_desc&token=${token}`
      )
      .then(response => {
        const events = getEvents(response.data.events)
        resolve(events)
      })
      .catch(err => rejects(err))
  })
}

const getEvents = eventsData => {
  return eventsData.map(eventData => ({
    title: eventData.name.text,
    url: eventData.url,
    image: eventData.logo
      ? eventData.logo.original.url
      : 'https://via.placeholder.com/350x250'
  }))
}

export { getRecentEvents }

/*
{
  title,
  url,
  image,
}
*/
