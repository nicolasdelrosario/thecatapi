import { $ } from './jquery.js'
import { getBreedCatById, getBreedCats } from './services'

export async function displayBreedCats() {
	let templateHTML = ``
	const cats = await getBreedCats()
	cats.forEach(cat => {
		const breed = cat.breeds[0]
		templateHTML += `
	    <div>
        <img id=cat-${cat.id} width=300 height=300 src="${cat.url}"/>
        <h3>${breed.name}</h3>
        <p>${breed.description}</p>
        <span>${breed.origin}</span>
        <span>${breed.weight.metric} kg</span>
        <span>${breed.temperament}</span>
	    </div>
	  `
	})

	$('#breedCats').innerHTML = templateHTML

	cats.forEach(cat => {
		$(`#cat-${cat.id}`).addEventListener('click', () =>
			displayBreedCatById(cat.id)
		)
	})
}

async function displayBreedCatById(id) {
	const cat = await getBreedCatById(id)
	const breed = cat.breeds[0]
	const templateHTML = `
    <div>
      <img src="${cat.url}"/>
      <h3>${breed.name}</h3>
      <p>${breed.description}</p>
      <span>${breed.origin}</span>
      <span>${breed.weight.metric} kg</span>
      <span>${breed.temperament}</span>
    </div>
	`

	$('#catSelected').innerHTML = templateHTML
}
