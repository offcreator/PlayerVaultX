document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
