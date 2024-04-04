import API from './api'

export async function getBreedCats(page = 1) {
	const { data } = await API.get('/breeds', {
		params: {
			limit: 6,
			page: page,
		},
	})
	return data
}

export async function getBreedCatById(id) {
	const { data } = await API.get(`/breeds/${id}`)
	return data
}

export async function getFavoriteCats(page = 1) {
	const { data } = await API.get('/favourites', {
		params: {
			limit: 3,
			page: page,
		},
	})
	return data
}
