const bookingDetails = JSON.parse(localStorage.getItem('bookings'));
  if (bookingDetails) {
    document.getElementById('booking-details').innerHTML =
     `
     <p>Destination: ${bookingDetails.destination}</p>
     <p>Date: ${bookingDetails.date}</p>
     <p>Passengers: ${bookingDetails.passengers}</p>
     `
  } else {
    document.getElementById('booking-details').innerHTML = "<p>No booking found.</p>"
  }