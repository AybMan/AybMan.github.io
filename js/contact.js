const form = document.querySelector('#contact');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage('submitted')

    
    const name = form.querySelector('name').value
    console.log(name);
    // const company = form.querySelector('').value
    // const email = form.querySelector('').value

    // name = ''
    // company = ''
    // email = ''

    setTimeout(()=> {
        message.classList.add('d-none');
    }, 5000);
        
    
    // form.reset();
})


function successMessage(text) {
    // message.classList.add('alert')
    // message.classList.add('alert-success')
    message.textContent = text;
}
function errorMessage(text) {
    message.classList.add('alert')
    message.classList.add('alert-danger')
    message.textContent = text;
}