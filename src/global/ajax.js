import axios from 'axios'

export function get(url, params) {
  return axios.get(url, { params })
}