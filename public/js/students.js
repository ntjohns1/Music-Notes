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
        const response = await fetch('/api/student', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, username, email, password, is_Teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            document.location.replace('/students');
            alert('Student successfully added!')
        } else {
            alert('Failed to add student')// change to a modal
        }
    }
}

//this function does not work yet
const deleteStudent = async (event) => {
    event.preventDefault();
const studentId = document.querySelector('#delete-student-btn').value
    console.log(studentId);

    if (studentId) {
        const id = studentId;
    
        const response = await fetch(`/api/student/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          console.log("student deleted");
          document.location.replace('/students');
        } else {
          alert('Failed');
        }
      }
    
}
const viewStudents = async (event) => {
    
    const getUsers = async () => {
            const results = await sequelize.query('SELECT user.id, user.is_teacher, CONCAT (user.first_name, " ", user.last_name) AS name FROM user', { type: QueryTypes.SELECT });
            const student = results.filter(teacher => teacher.is_teacher == 0);
            
            student.forEach(({ name }) => {
                console.log(name );
            });
            return results
        };
        getUsers(); 
    
    const response = await fetch('api/students', {
        method: 'GET',
        })

        if (response.ok) {
            console.log(getUsers)
        }
    

}

document
  .querySelector('.add-student-form')
  .addEventListener('submit', addStudentHandler);

  document
  .querySelector('#delete-student-btn')
  .addEventListener('click', deleteStudent);


// document
//   .querySelector('.view-student-form')
//   .addEventListener('submit', viewStudents);
