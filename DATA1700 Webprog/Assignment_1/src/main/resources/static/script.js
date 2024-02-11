
const movieArray = [];

function buyTickets() {
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

    if (phoneIn != "" && emailIn != "") {
        movieArray.push(movieInfo);
    }
    
    

    movieArray.forEach(movie => { 
        listTicketOut.innerHTML += '<Strong>Movie: </Strong>' + movie.movieTitle + '<br /> Number: ' + movie.number + '<br /> First name: ' + movie.firstName + '<br /> Last name: ' + movie.lastName
        + '<br /> Phone: ' + movie.phone + '<br /> Email: ' + movie.email + '<br /><br />';
    });

    
    
    document.getElementById('movieForm').reset();
    
    
}

function deleteTickets() {
    movieArray.length = 0;
    let listTicketOut = document.getElementById('listTickets');
    listTicketOut.innerHTML = "";
}
