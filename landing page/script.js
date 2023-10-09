
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // If validation passes, you can perform an action like displaying a success message
        alert("Form submitted successfully!");

        // You can also reset the form fields
        form.reset();
    });
});
