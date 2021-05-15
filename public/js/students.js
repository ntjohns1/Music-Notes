const addStudentHandler = async (event) => {
    event.preventDefault();
    console.log('button clicked')
    const first_name = document.querySelector('#firstName-createStudent').value.trim();
    const last_name = document.querySelector('#lastName-createStudent').value.trim();
    const username = 'username'
    const email = document.querySelector('#email-createStudent').value.trim();
    
    function makePassword(maxLengthPass) {
        var collectionOfLetters = "abcdefghijklmnopqrstuvwxyz0123456789";
        var generatedPassword = "";
        var size = collectionOfLetters.length;
        for (var i = 0; i < maxLengthPass; ++i) {
           generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
        }
        return generatedPassword;
     } 
    
    const password = makePassword(10)//generate random password
    const is_Teacher = false

    if (first_name && last_name && email) {
        console.log(first_name , last_name , username , email , password , is_Teacher )
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, username, email, password, is_Teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            document.location.replace('/');
            alert('Student successfully added!')
        } else {
            alert('Failed to add student')// change to a modal
        }
    }
}

document
  .querySelector('.add-student-form')
  .addEventListener('submit', addStudentHandler);