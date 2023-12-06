let formDataArray = [];


function submitForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

    let formData = {
        name: name,
        email: email,
        message: message
      };

   // Add the form data to the array
   formDataArray.push(formData);

   // Clear form fields
   document.getElementById("myForm").reset();
   
   // Log the array to the console
   console.log("The data result:", formDataArray);

   // Display a confirmation message
   alert("Your information is saved. You will hear from me soon!");
    
}