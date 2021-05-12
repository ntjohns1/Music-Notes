const viewComments = async (event) => {
    event.preventDefault();
    //select a student or findbyPK() and grab all the comments for that student along with the associated data
}


const addComment = async (event) => {
    event.preventDefault();

    const date = document.querySelector('#date-comment').value.trim();
    const content = document.querySelector('#content-comment').value.trim();
    const student_id = document.querySelector('#student_id-comment').value.trim();
    const teacher_id = document.querySelector('#email-signup').value.trim();


    if (date && content && student_id && teacher_id) {
        console.log(date, content, student_id, teacher_id )
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ date, content, student_id, teacher_id }),
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
  .querySelector('.comment-form')
  .addEventListener('submit', addComment);