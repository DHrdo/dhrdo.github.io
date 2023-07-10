function sendMail() {
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    var params = {
        email: email,
        message: message
    };

    const SERVICE_ID = 'service_gyecdv4';
    const TEMPLATE_ID = 'template_onol33f';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then((response) => {
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            alert('Message Sent!');
        })
        .catch((err) => console.log(err));
}