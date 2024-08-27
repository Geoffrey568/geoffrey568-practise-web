// script for booking form submission 
const bookNowButton = document.querySelector('.book-now-button');
const form = document.getElementById('booking-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
 
  // Get input values
  let destination = document.querySelector('.destination').value;
  const date = document.getElementById('date').value;
  const passengers = document.getElementById('passengers').value;
  

  bookNowButton.addEventListener('click', () => {
    
    if (destination && date && passengers) {
      // disable the button to prevent multiple clicks
      bookNowButton.disabled = true;
      bookNowButton.textContent = "Booking...";
      // simulate a booking process
      setTimeout(() => {
      // after 2 seconds, show 'Booked!
      alert("Flight to " + destination.value + " booked successfully for " + passengers.value + " passenger(s) on " + date.value + ".");
      bookNowButton.textContent = "Booked!";
            
      let bookings = {
        destination: `${destination}`,
        dates: `${date}`,
        passengers: passengers
      }
      console.log(bookings);
      (localStorage.setItem('bookings',JSON.stringify(bookings) ));
      });
      // reset button after 1 second
      setTimeout(() => {
        bookNowButton.textContent = 'Book Now!';
        bookNowButton.disabled = false;
        //redirect to a page to display the booking details bookings.html
      }, 1000);  

    } else {
        // Show an error message if fields are missing
        bookNowButton.textContent = 'PLEASE FILL OUT ALL REQUIRED FIELDS.';
        bookNowButton.classList.add('booking-alert');

        setTimeout(() => {
          bookNowButton.classList.remove('booking-alert');
          bookNowButton.textContent = 'Book Now';
        },3000);
    } 
  });
});