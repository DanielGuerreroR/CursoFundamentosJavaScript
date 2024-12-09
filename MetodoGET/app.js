//'Seleccion elementos HTML'
const listElement = document.querySelector(".posts");
const postTempalte = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#post-container");

//funcion de peticiones
function sendHTTPRequest(method, url, data) {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		return response.json();
	});
}

//'funcion que nos traiga los POST (GET)'
async function fetchPosts() {
	const responseData = await sendHTTPRequest(
		"GET",
		"https://jsonplaceholder.typicode.com/posts"
	);
	console.log(responseData);
	//Nueva constante
	const listOfPosts = responseData;
	//Operacion de manipulacion del DOM
	for (const post of listOfPosts) {
		const postContainer = document.createElement("article");
		postContainer.id = post.id;
		postContainer.classList.add("post-item");

		const title = document.createElement("h2");
		title.textContent = post.title;

		const body = document.createElement("p");
		body.textContent = post.body;

		const button = document.createElement("button");
		button.textContent = "DELETE Content";

		postContainer.append(title);
		postContainer.append(body);
		postContainer.append(button);

		listElement.append(postContainer);
	}
}

//'Generar interaccion de boton HTML y JS'
fetchButton.addEventListener("click", fetchPosts);
