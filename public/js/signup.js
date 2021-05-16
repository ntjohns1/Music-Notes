const signUpFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const is_teacher = document.querySelector('#isTeacher-signup').value; //userType needs to be a BOOLEAN

    if (first_name && last_name && email && password && is_teacher) {
        //console.log(first_name , last_name , email , password , is_teacher )
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password, is_teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            alert('Thanks for signing up!')
            document.location.replace('/');
        } else {
            alert('Failed to sign up')// change to a modal?
        }
    }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);