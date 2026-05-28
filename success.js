const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  // Display success message
  alert("THE INFORMATION IS SUCCESSFULLY SUBMITTED");
  
  // Optional: Clear the form
  form.reset();
});
