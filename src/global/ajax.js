import axios from 'axios'

const v = axios.create()

v.defaults.timeout = 2500

console.log(v.defaults)
