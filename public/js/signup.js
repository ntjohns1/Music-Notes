const signUpFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const is_teacher = true;

    if (first_name && last_name && email && password && is_teacher) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password, is_teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            alert('You have successfully signed up!\nPlease log in to begin using Music Notes')
            document.location.replace('/login');
        } else {
            alert('Failed to sign up')// change to a modal?
        }
    }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);