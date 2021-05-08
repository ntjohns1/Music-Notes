const signUpFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const is_Teacher = document.querySelector('#isTeacher-signup').value;//userType needs to be a BOOLEAN

    if (first_name && last_name && username && email && password && is_Teacher) {
        console.log(first_name , last_name , username , email , password , is_Teacher )
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, username, email, password, is_Teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up')// change to a modal
        }
    }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);