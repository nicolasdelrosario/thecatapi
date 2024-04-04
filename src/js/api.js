import axios from 'axios'
import API_KEY from './env'

const API = axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'X-API-KEY': API_KEY,
	},
})

export default API
