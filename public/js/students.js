const addStudentHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-createStudent').value.trim();
    const last_name = document.querySelector('#lastName-createStudent').value.trim();
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
    
    const password = makePassword(8)
    const is_teacher = 0

    if (first_name && last_name && email) {
        const response = await fetch('/api/student', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password, is_teacher}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            alert(`${first_name} ${last_name} successfully added as student!\nPlease write down student's password: ${password}`)
            document.location.replace('/students');
        } else {
            alert('Failed to add student. Please check to make sure all fields have been filled out correctly.')
        }
    }
}

async function deleteStudent(event) {
    event.preventDefault();

    const studentId = $(this).val()

    if (studentId) {
        const id = studentId;
    
        const response = await fetch(`/api/student/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          alert("Student successfully deleted");
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

async function updateStudent(event) {
    event.preventDefault();
    
    const studentId = $(this).val()
    
    const first_name = $(this).closest('tr').children().eq(1).children().val()
    const last_name = $(this).closest('tr').children().eq(2).children().val()
    const email = $(this).closest('tr').children().eq(3).children().val()
    
    console.log(studentId, first_name, last_name, email)

    if (studentId) {
        const id = studentId;
    
        const response = await fetch(`/api/student/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
           first_name,
           last_name,
           email
        }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          alert(`${first_name} ${last_name} successfully updated.`);
          document.location.replace('/students');
        } else {
          alert('Failed');
        }
      }
}


document
  .querySelector('.add-student-form')
  .addEventListener('submit', addStudentHandler);

$(document).on('click', '.delete-student-btn', deleteStudent)

$(document).on('click', '.update-student-btn', updateStudent)