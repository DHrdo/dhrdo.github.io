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

    const serviceID = 'service_gyecdv4';
    const templateID = 'template_onol33f';

    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            alert('Message Sent!');
        })
        .catch((err) => console.log(err));
}