// document.addEventListener('DOMContentLoaded', function() {
//     // Handling skill icons click to display the name
//     const skillIcons = document.querySelectorAll('.skill-icons i');
//     skillIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//             alert(this.getAttribute('Java'));
//         });
//     });

//     // Handle form submission for contact page
//     if (document.querySelector('#contactForm')) {
//         document.querySelector('#contactForm').addEventListener('submit', function(event) {
//             event.preventDefault();
//             const fullname = document.querySelector('#fullname').value;
//             const email = document.querySelector('#email').value;
//             const message = document.querySelector('#message').value;

//             // Here you would send the form data to your backend
//             console.log('Form submitted:', fullname, email, message);
//             alert('Your message has been sent!');
//         });
//     }
// });

// var ol = document.querySelector(".overlay");
// b.addEventListener("pointerover", function(){
//     ol.style.display = "block";
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="Register-form"]');

    form.addEventListener('submit', function(event) {
        // Get the form elements
        const fullName = document.getElementById('fullname');
        const email = document.getElementById('email');
        const location = document.getElementById('location');
        const message = document.getElementById('message');

        // Validate full name
        if (fullName.value.trim() === '') {
            alert('Full Name is required.');
            fullName.focus();
            event.preventDefault();
            return false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alert('Please enter a valid email address.');
            email.focus();
            event.preventDefault();
            return false;
        }

        // Validate location
        if (location.value.trim() === '') {
            alert('Location is required.');
            location.focus();
            event.preventDefault();
            return false;
        }

        // Validate message
        if (message.value.trim() === '') {
            alert('Message is required.');
            message.focus();
            event.preventDefault();
            return false;
        }

        return true;
    });
});
