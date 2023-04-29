const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()

    // this gets the inputfield so users can type movie
    const inputField = document.querySelector('input')

    // this creates an LI and SPAN elements
    const movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    // this sets movietitle text content to the value of the whatever is typed inside inputField
    movieTitle.textContent = inputField.value

    // The addEventListener is watching when the created span is clicked to perform the crossOffMovie function. 
    movieTitle.addEventListener('click', crossOffMovie)

    // movieTitle(span) is being added to movie(li)
    movie.appendChild(movieTitle)

    // created a button
    const deleteBtn = document.createElement('button')

    // We changed the value of delete Button to X
    deleteBtn.textContent = 'X'

    // when delete button is clicked we are running another function that deletes the entire li 
    deleteBtn.addEventListener('click', deleteMovie)

    // This allows deleteBtn to be a child of movie 
    movie.appendChild(deleteBtn)

    // we making li aka movie the child of ul
    document.querySelector('ul').appendChild(movie)

    inputField.value = '';
}

// This is allowing the user to create their movie li. The addEventListener is watching out what we need the user to do in this case when they hit submit we are running the function called addMovie. 
document.querySelector('form').addEventListener('submit',addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()

    // we are displaying a message 
    message.textContent = 'Movie deleted!'
}

// it takes an event and then it swiches on and off a class of toggle
const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

    // 
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    }  else {
        message.textContent = 'Movie added back!'
    }
}