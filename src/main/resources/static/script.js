
const movieArray = [];

function buyTickets() {
    event.preventDefault();

    let listTicketOut = document.getElementById('listTickets');
    listTicketOut.innerHTML = '';

    let movieIn = document.getElementById('movieSelector').value;
    let numberIn = document.getElementById('number').value;
    let firstNameIn = document.getElementById('firstName').value;
    let lastNameIn = document.getElementById('lastName').value;
    let phoneIn = document.getElementById('phone').value;
    let emailIn = document.getElementById('email').value;

    const movieInfo = {
        movieTitle: movieIn,
        number: numberIn,
        firstName: firstNameIn,
        lastName: lastNameIn,
        phone: phoneIn,
        email: emailIn
    };

    if (validateEmail(emailIn) && validatePhone(phoneIn) && emailIn != "" && phoneIn != "") {
        movieArray.push(movieInfo);   
        document.getElementById('movieForm').reset();
    }

    if (validateEmail == false) {
        document.getElementById('emailMsg').innerHTML = 'Invalid Email, Try Again!'
    }
    
    movieArray.forEach(movie => { 
        listTicketOut.innerHTML += '<Strong>Movie: </Strong>' + movie.movieTitle + '<br /> Number: ' + movie.number + '<br /> First name: ' + movie.firstName + '<br /> Last name: ' + movie.lastName
        + '<br /> Phone: ' + movie.phone + '<br /> Email: ' + movie.email + '<br /><br />';
    });  
}

function deleteTickets() {
    movieArray.length = 0;
    let listTicketOut = document.getElementById('listTickets');
    listTicketOut.innerHTML = "";
}

function validateEmail(email) {
    return /^[\w-_.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
} 

function validatePhone(phone_nr) {
    return /^[0-9]{3}-[0-9]{2}-[0-9]{3}$/.test(phone_nr)
}


