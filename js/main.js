let pokemon = pokemons.slice(0, 30)
let movie = movies


let elList = document.querySelector(".list");
elList.classList.add( "list-unstyled", "d-flex", "row", "justify-content-between", "mt-5" );
let container = document.querySelector(".img-wrap");
let elPokemonBtn = document.querySelector(".pokemon");
let elMovieBtn = document.querySelector(".movie");
let elBothBtn = document.querySelector(".both");
let elClearBtn = document.querySelector(".clear");

elPokemonBtn.addEventListener("click", function(){
	
	elList.innerHTML = null;
	container.textContent = null;
	
	function dragon(dragon) {
		
		pokemonLogo = document.createElement("img");
		pokemonLogo.src = "img/pokemon_logo.png"
		container.appendChild(pokemonLogo)
		
		for (let i = 0; i < pokemons.length; i++) {
			let li = document.createElement("li");
			elList.appendChild(li);
			li.classList.add("item", "col-4", 'width:25', "mb-4")
			li.style.border = "1px solid black";
			li.style.width = "400px"
			
			
			newDiv = document.createElement("div");
			li.appendChild(newDiv);
			newDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center")
			
			newImg = document.createElement("img")
			newDiv.appendChild(newImg);
			newImg.src = pokemons[i]["img"];
			newImg.classList.add("card-img-top", "pt-3", "col-12")
			newImg.style.width = "200px"
			
			newTitle = document.createElement("h2");
			newDiv.appendChild(newTitle);
			newTitle.textContent = pokemons[i]["name"];
			newTitle.classList.add("card-title");
			
			newP = document.createElement("p");
			newDiv.appendChild(newP);
			newP.textContent = pokemons[i]["type"];
			newP.classList.add("fs-4", "mt-4");
			
			heightP = document.createElement("p");
			newDiv.appendChild(heightP);
			heightP.textContent = pokemons[i]["height"]
			heightP.classList.add("fs-4");
			
			weightP = document.createElement("p");
			newDiv.appendChild(weightP);
			weightP.textContent = pokemons[i]["weight"]
			weightP.classList.add("fs-4");
		}
	}
	dragon()
})


elMovieBtn.addEventListener("click", function(){
	
	elList.innerHTML = null;
	container.innerHTML = null;
	function movieRender(movieRendeer) {
		
		movieLogo = document.createElement("img");
		movieLogo.src = "img/pngwing.com.png"
		container.appendChild(movieLogo)
		movieLogo.style.width = "400px"
		for (let i = 0; i < movies.length; i++) {
			let li = document.createElement("li");
			elList.appendChild(li);
			li.classList.add("item", "col-4", 'width:25', "mb-4")
			li.style.border = "1px solid black";
			li.style.width = "400px"
			
			
			newDiv = document.createElement("div");
			li.appendChild(newDiv);
			newDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center")
			
			newImg = document.createElement("img");
			newDiv.appendChild(newImg);
			newImg.src = movies[i]["Images"];
			// newImg.classList.add( );
			newImg.style.width = "300px";
			newImg.style.padding = "10px"
			newImg.style.height = "216px";
			newImg.style.maxWidth = "100%";
			newImg.style.display = "block";
			
			
			newTitle = document.createElement("h5");
			newDiv.appendChild(newTitle);
			newTitle.textContent = movies[i]["Title"];
			newTitle.classList.add("card-title", "fs-2",);
			newTitle.style.display = "block", "important";
			newTitle.style.color = "#FFFFFF";
			newTitle.style.backgroundColor = "blue";
			
			
			newP = document.createElement("p");
			newDiv.appendChild(newP);
			newP.textContent = movies[i]["Year"];
			newP.classList.add("fs-4", "mt-4");
			
			rateP = document.createElement("p");
			newDiv.appendChild(rateP);
			rateP.textContent = movies[i]["Rated"]
			rateP.classList.add("fs-4");
			
			
			
			elBtnGroup = document.createElement("div");
			elBtnGroup.classList.add("d-flex", "justify-content-between")
			li.appendChild(elBtnGroup)
			
			
			newTrailer = document.createElement("button");
			newTrailer.textContent = "Watch trailer"
			elBtnGroup.appendChild(newTrailer);
			newTrailer.classList.add("btn","btn-outline-danger", "mb-2");
			
			newBookmark = document.createElement("button");
			newBookmark.textContent = "Bookmark";
			elBtnGroup.appendChild(newBookmark);
			newBookmark.classList.add("btn", "btn-outline-success", "mb-2")
			
			newInfo = document.createElement("button");
			newInfo.textContent = "New Info";
			elBtnGroup.appendChild(newInfo);
			newInfo.classList.add("btn", "btn-outline-primary", "mb-2")
			
		}
	}
	movieRender()
})


elClearBtn.addEventListener("click", function(){
	container.innerHTML = null;
	elList.innerHTML = null;
	elList.innerHTML = "<li>CLEANED</li>"
})

elBothBtn.addEventListener("click", function () {
// 	function renderRandom(array1, array2) {
// 		elList.innerHTML = null;
		
// 		let newArray = array1.concat(array2)
// 		let arrayLength = newArray.length
		
// 		for (let i = 0; i < arrayLength; i++) {
// 			let randomNum = Math.floor(Math.random() * newArray.length)
			
// 			let newLi = document.createElement("li");
			
// 			let newImg = document.createElement("img");
// 			let newH3 = document.createElement("h3");
// 			newImg.width = "200";
			
// 			let currentItem = newArray[randomNum]
			
// 			if (currentItem.name) {
// 				newImg.src = currentItem.img;
// 				newH3.textContent = currentItem.name;
// 			}else {
// 				newImg.src = `https://img.youtube.com/vi/${currentItem.ytid}/mqdefault.jpg`;
// 				newH3.textContent = currentItem.Title;
// 			}
			
// 			newLi.appendChild(newImg);
// 			newLi.appendChild(newH3);
			
// 			elList.appendChild(newLi);
			
			
// 			newArray.splice(randomNum, 1)
// 		}
		
		
		
// 	}
// 	renderRandom(pokemon, movie)

// }
// 	)
function dragon(dragon) {
		
	pokemonLogo = document.createElement("img");
	pokemonLogo.src = "img/pokemon_logo.png"
	container.appendChild(pokemonLogo)
	
	for (let i = 0; i < pokemons.length; i++) {
		let li = document.createElement("li");
		elList.appendChild(li);
		li.classList.add("item", "col-4", 'width:25', "mb-4")
		li.style.border = "1px solid black";
		li.style.width = "400px"
		
		
		newDiv = document.createElement("div");
		li.appendChild(newDiv);
		newDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center")
		
		newImg = document.createElement("img")
		newDiv.appendChild(newImg);
		newImg.src = pokemons[i]["img"];
		newImg.classList.add("card-img-top", "pt-3", "col-12")
		newImg.style.width = "200px"
		
		newTitle = document.createElement("h2");
		newDiv.appendChild(newTitle);
		newTitle.textContent = pokemons[i]["name"];
		newTitle.classList.add("card-title");
		
		newP = document.createElement("p");
		newDiv.appendChild(newP);
		newP.textContent = pokemons[i]["type"];
		newP.classList.add("fs-4", "mt-4");
		
		heightP = document.createElement("p");
		newDiv.appendChild(heightP);
		heightP.textContent = pokemons[i]["height"]
		heightP.classList.add("fs-4");
		
		weightP = document.createElement("p");
		newDiv.appendChild(weightP);
		weightP.textContent = pokemons[i]["weight"]
		weightP.classList.add("fs-4");
	}
}
dragon()


	
	elList.innerHTML = null;
	container.innerHTML = null;
	function movieRender(movieRendeer) {
		
		movieLogo = document.createElement("img");
		movieLogo.src = "img/pngwing.com.png"
		container.appendChild(movieLogo)
		movieLogo.style.width = "400px"
		for (let i = 0; i < movies.length; i++) {
			let li = document.createElement("li");
			elList.appendChild(li);
			li.classList.add("item", "col-4", 'width:25', "mb-4")
			li.style.border = "1px solid black";
			li.style.width = "400px"
			
			
			newDiv = document.createElement("div");
			li.appendChild(newDiv);
			newDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center")
			
			newImg = document.createElement("img");
			newDiv.appendChild(newImg);
			newImg.src = movies[i]["Images"];
			// newImg.classList.add( );
			newImg.style.width = "300px";
			newImg.style.padding = "10px"
			newImg.style.height = "216px";
			newImg.style.maxWidth = "100%";
			newImg.style.display = "block";
			
			
			newTitle = document.createElement("h5");
			newDiv.appendChild(newTitle);
			newTitle.textContent = movies[i]["Title"];
			newTitle.classList.add("card-title", "fs-2",);
			newTitle.style.display = "block", "important";
			newTitle.style.color = "#FFFFFF";
			newTitle.style.backgroundColor = "blue";
			
			
			newP = document.createElement("p");
			newDiv.appendChild(newP);
			newP.textContent = movies[i]["Year"];
			newP.classList.add("fs-4", "mt-4");
			
			rateP = document.createElement("p");
			newDiv.appendChild(rateP);
			rateP.textContent = movies[i]["Rated"]
			rateP.classList.add("fs-4");
			
			
			
			elBtnGroup = document.createElement("div");
			elBtnGroup.classList.add("d-flex", "justify-content-between")
			li.appendChild(elBtnGroup)
			
			
			newTrailer = document.createElement("button");
			newTrailer.textContent = "Watch trailer"
			elBtnGroup.appendChild(newTrailer);
			newTrailer.classList.add("btn","btn-outline-danger", "mb-2");
			
			newBookmark = document.createElement("button");
			newBookmark.textContent = "Bookmark";
			elBtnGroup.appendChild(newBookmark);
			newBookmark.classList.add("btn", "btn-outline-success", "mb-2")
			
			newInfo = document.createElement("button");
			newInfo.textContent = "New Info";
			elBtnGroup.appendChild(newInfo);
			newInfo.classList.add("btn", "btn-outline-primary", "mb-2")
			
		}
	}
	movieRender()
	dragon()
})





	
	
	
	
	
	
	
	
	
	
	
	
	
	
	