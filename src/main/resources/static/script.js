
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

    if (movieIn.length == 0) {
        document.getElementById('selectMessage').innerHTML = 'Movie not selected!';
    }else{
        document.getElementById('selectMessage').innerHTML = '';
    }

    if (numberIn == '') {
        document.getElementById('numMessage').innerHTML = "Choose number of people!";
    }else{
        document.getElementById('numMessage').innerHTML = "";
    }

    if (firstNameIn == '') {
        document.getElementById('firstNameMessage').innerHTML = "First name is required!";
    }else{
        document.getElementById('firstNameMessage').innerHTML = "";
    }

    if (lastNameIn == '') {
        document.getElementById('lastNameMessage').innerHTML = 'Last name is required!';
    }else{
        document.getElementById('lastNameMessage').innerHTML = '';
    }

    if (validateEmail(emailIn) && validatePhone(phoneIn) && emailIn != "" && phoneIn != "") {
        movieArray.push(movieInfo);   
        document.getElementById('movieForm').reset();
    }

    if (validateEmail(emailIn) == false) {
        document.getElementById('emailMessage').innerHTML = 'Invalid Email, Try Again!';
    }else{
        document.getElementById('emailMessage').innerHTML = '';
    }

    if (validatePhone(phoneIn) == false) {
        document.getElementById('telMessage').innerHTML = 'Invalid Phone, Try Again!';
    }else{
        document.getElementById('telMessage').innerHTML = '';
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


