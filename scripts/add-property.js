document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Function to check if the Canadian postal code is valid
  function isValidCanadianPostalCode(postalCode) {
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return regex.test(postalCode);
  }

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('#needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Check if form is valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Validate the postal code
      const postalCodeInput = document.getElementById('inputPostalCode');
      if (!isValidCanadianPostalCode(postalCodeInput.value)) {
        // If postal code is not valid, prevent form submission and show validation feedback
        event.preventDefault();
        postalCodeInput.classList.remove('is-valid');
        postalCodeInput.classList.add('is-invalid');
        event.stopPropagation(); // Stop the form from submitting
      } else {
        // If postal code is valid, remove invalid class and keep valid class
        postalCodeInput.classList.remove('is-invalid');
        postalCodeInput.classList.add('is-valid');
      }

      // Add Bootstrap validation class
      form.classList.add('was-validated');
    }, false);
  });

  // Listen for input event on postal code field to add/remove validation classes
  document.getElementById('inputPostalCode').addEventListener('input', function() {
    // Reset validation state upon input
    this.classList.remove('is-invalid');
    this.classList.remove('is-valid');
    
    // Apply the correct validation class based on the postal code validity
    if (isValidCanadianPostalCode(this.value)) {
      this.classList.add('is-valid');
    } else {
      this.classList.add('is-invalid');
    }
  });

  // Enable confirmation checkbox when the policy has been scrolled to the end
  document.getElementById('policy').addEventListener('scroll', function() {
    var element = document.getElementById('policy');
    if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
      document.getElementById('invalidCheck').disabled = false;
    }
  });

});
