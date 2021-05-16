// **user hits "go" app shows add comment section and hides dropdown
// add submit button under text area that calls addComment, format inputs to match 
// **set attribute hidden back to false for text area and comment history
// page script needs to fetch the comments for that student and populate the UI with them (id=commentHistory)
// add event listeners to edit and delete buttons on comment history
const selectStudent = async (event) => {
    console.log('it works');
    event.preventDefault();
    const student = document.querySelector('#userSelect').value.trim();

    // take the student's id
    // put it into the query
    // the /api/comment route must be setup to handle this
    // it will return the data
    // then the front end js needs to build out the rest of the view


    // figure out how to grab the id for the selected user
    // document.querySelector('#userSelect').setAttribute('hidden', true);
    // document.querySelector('#manageComments').removeAttribute('hidden');
    // query to get user id
    const response = await fetch('/api/comment', {
        method: 'GET',
        body: JSON.stringify({ first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        console.log(response.body);
      } else {
        alert(response.statusText);
      }
    // then fetch to get comments
    // filter the comments where user id we grabbed === Comment.student_id
    // create the elements using the bootstrap components on lines 53 through 61 of the comment.handlebars file
    // populate text areas with comment history
}

// const viewComments = async (event) => {
//     event.preventDefault();
//     //select a student or findbyPK() and grab all the comments for that student along with the associated data
// }


const addComment = async (event) => {
    event.preventDefault();

    const date = document.querySelector('#date-comment').value.trim();
    const content = document.querySelector('#content-comment').value.trim();
    const student_id = document.querySelector('#student_id-comment').value.trim();
    const teacher_id = document.querySelector('#teacher_id-comment').value.trim();


    if (date && content && student_id && teacher_id) {
        console.log(date, content, student_id, teacher_id)
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ date, content, student_id, teacher_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add comment')// change to a modal
        }
    }
}

// document
//     .querySelector('.comment-form')
//     .addEventListener('submit', addComment);
document
    .querySelector('#userSelectBtn')
    .addEventListener('click', selectStudent);