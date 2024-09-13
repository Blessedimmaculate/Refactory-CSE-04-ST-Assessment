document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission to validate first

    let isValid = true;

    // Validation fields
    const fieldsToValidate = [
      { id: "fullName", message: "Full Name is required" },
      { id: "gender", message: "Gender is required" },
      { id: "dob", message: "Date of Birth is required" },
      { id: "nationality", message: "Nationality is required" },
      { id: "phoneNumber", message: "Phone Number is required" },
      { id: "email", message: "Email Address is required" },
      { id: "emergencyPhoneNumber", message: "Emergency Phone Number is required" },
      { id: "passportNumber", message: "Passport Number is required" },
      // { id: "visaDocument", message: "Visa Document is required" },
      { id: "departureCity", message: "Departure City is required" },
      { id: "destinationCity", message: "Destination City is required" },
    ];

    // Reset all error messages
    document.querySelectorAll(".error-message").forEach((errorSpan) => {
      errorSpan.style.display = "none";
    });

    // Validate each field
    fieldsToValidate.forEach((field) => {
      const inputElement = document.getElementById(field.id);
      const errorMessage = document.getElementById(`${field.id}Error`);

      if (!inputElement.value || inputElement.value === "") {
        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid field";
        isValid = false;
      }
    });

    // If form is valid, reset and show success message
    if (isValid) {
      bookingForm.reset(); // Reset form fields
      const successMessage = document.getElementById("successMessage");
      successMessage.textContent = "Your booking request has been received.";
      successMessage.style.color = "green";
      successMessage.style.display = "block";
    }
  });
});
