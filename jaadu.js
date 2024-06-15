// Get reference to the input elements and submit button
let inputNumber = document.getElementById('phone');
let inputMessage = document.getElementById('message');
let submitButton = document.getElementById('submit');

// Function to handle opening WhatsApp in a new window
function openWhatsApp() {
    // Get the value of the input fields (phone number and message)
    let phoneNumber = inputNumber.value.trim();
    let message = encodeURIComponent(inputMessage.value.trim());

    // Validate phone number format
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return; // Exit function if phone number format is invalid
    }

    // Construct the WhatsApp URL with phone number and message
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
}

// Add event listener to the submit button
submitButton.addEventListener('click', openWhatsApp);
