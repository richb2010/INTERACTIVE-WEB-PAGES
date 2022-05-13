document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossoffMovie);
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement ("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector("ul");
    list.appendChild(movie);

    // or
    // document.querySelector("ul").appendChild(movie)

    inputField.value =''
}

function deleteMovie(event) {
    // intermediate
    // message.textContent = `${event.target.parentNode. firstChild.textContent}

    //core lab
    message.textContent = `Movie deleted!`

    //revealMessage is part of the intermediate instructions
    revealMessage()

    event.target.parentNode.remove();
}
function crossoffMovie(event) {
    event.target.classlist.toggle('checked')

    if (event.target.classlist.contains('checked') === true) {
        message.textContent = 'Movie watched!'
        //interemdiate version
        // message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = 'Movie added back!'
        //interemdiate version
        // message.textContent = `${event.target.textContent} added back!`
    }    
//revealMessage will be part of the intermediate instructions
function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
