import axios from 'axios'

const getDataFromApi = (url) => {
  return axios.get(url)
    .then(({ data }) => {
      return data
    })
}

export {
  getDataFromApi
}
