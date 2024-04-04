import { $ } from './jquery.js'
import { getBreedCatById, getBreedCats, getFavoriteCats } from './services'

export async function displayBreedCats(page) {
	let templateHTML = ``
	const cats = await getBreedCats(page)
	cats.forEach(cat => {
		templateHTML += `
			<div class="py-8 px-4 my-3 bg-pale-yellow border-2 border-coral">
				<figure class="mb-5">
					<img
						class="h-52 w-52 mx-auto object-fill"
						src="${cat.image.url}"
						alt="${cat.name}"/>
				</figure>
				<div class="flex flex-col gap-y-1">
					<h3 class="text-2xl text-dark-slate">${cat.name}</h3>
					<p class="text-base text-charcoal">Origin: ${cat.origin}</p>
					<p class="text-base text-charcoal">							
						Weight: ${cat.weight.metric} kg
					</p>
				</div>
				<a
					id="cat-${cat.id}"
					class="flex justify-center bg-coral mt-4 px-4 py-3 text-dark-slate text-lg"
					href="breeds.html"
					>More Information</a
				>
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

export async function displayFavoriteCats() {
	let templateHTML = ``
	const cats = await getFavoriteCats()
	console.log(cats)
	cats.forEach(cat => {
		templateHTML += `
		<div class="py-8 px-4 my-3 bg-pale-yellow border-2 border-coral">
			<figure class="mb-5">
				<img
				class="h-52 w-52 mx-auto object-fill"
				src="${cat.image.url}"
				alt="Favorite Cat"
				/>
			</figure>
		</div> `
	})

	$('#favoriteCats').innerHTML = templateHTML
}

function nextPage(page) {
	page += 1
	displayBreedCats(page)
}

function prevPage(page) {
	page -= 1
	displayBreedCats(page)
}
