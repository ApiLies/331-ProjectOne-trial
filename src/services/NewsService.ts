import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getNews(perPage: number, page: number) {
    return apiClient.get('/news?_limit=' + perPage + '&_page=' + page)
  },
  getNewsItem(id: number) {
    return apiClient.get('/news/' + id)
  },
}
