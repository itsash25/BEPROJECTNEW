function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function redirectToDailyPass() {
    window.location.href = 'dailyPass.html';
}
function redirectToBookTicket() {
    window.location.href = 'bookTicketnew.html';
}


// Add this function to calculate the total fare based on the selected tickets
// function updateTotalFare(passId) {
//     var selectOptions = document.getElementById('selectOptions' + passId);
//     var updateFair = document.getElementById('updateFair' + passId);
    
//     var selectedValue = parseInt(selectOptions.value);
//     var farePerTicket = (passId === 1) ? 40 : (passId === 2) ? 50 : 80;
    
//     var totalFare = selectedValue * farePerTicket;
//     updateFair.textContent = totalFare;
// }

// Add this function to handle the booking and redirection
function booknow(passId) {
    var selectOptions = document.getElementById('selectOptions' + passId);
    
    // Get the selected tickets
    var selectedTickets = parseInt(selectOptions.value);

    // Calculate the total fare
    var farePerTicket = (passId === 1) ? 40 : (passId === 2) ? 50 : 80;
 // Adjust fare based on passId
    var totalFare = selectedTickets * farePerTicket;

    // Redirect to confirm_booking.html and pass data via URL parameters
    window.location.href = "confirm_booking.html?tickets=" + selectedTickets + "&totalFare=" + totalFare;
}

// Modify the existing booknow1 function to call the new booknow function
function booknow1() {
    booknow(1);
}

function booknow2() {
    booknow(2);
}

function booknow3(){
    booknow(3);
}

// Add this function to read URL parameters
function getURLParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Add this code to update the spans in confirm_booking.html
document.addEventListener("DOMContentLoaded", function () { 
    // Get the values from URL parameters
    var tickets = getURLParameter("tickets");
    var totalFare = getURLParameter("totalFare");

    // Update the spans in the confirm_booking.html file
    document.getElementById("ticket").textContent = tickets;
    document.getElementById("rs").textContent = totalFare;
});
