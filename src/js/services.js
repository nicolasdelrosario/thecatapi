import API from './api'

export async function getBreedCats(page = 1) {
	const { data } = await API.get('/images/search', {
		params: {
			has_breeds: 1,
			limit: 3,
			page: 1,
		},
	})
	return data
}

export async function getBreedCatById(id) {
	const { data } = await API.get(`/images/${id}`)
	return data
}
