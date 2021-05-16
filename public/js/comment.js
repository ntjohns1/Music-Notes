// **user hits "go" app shows add comment section and hides dropdown
// add submit button under text area that calls addComment, format inputs to match 
// **set attribute hidden back to false for text area and comment history
// page script needs to fetch the comments for that student and populate the UI with them (id=commentHistory)
// add event listeners to edit and delete buttons on comment history
const selectStudent = async (event) => {
    event.preventDefault();
    const student = document.querySelector('#userSelect').value;
    // take the student's id
    // put it into the query
    // the /api/comment route must be setup to handle this
    // it will return the data
    // then the front end js needs to build out the rest of the view
    // const getUserComments = async () => {
    //     const results = await sequelize.query('SELECT * FROM comment', { type: QueryTypes.SELECT });
    //     const userComments = results.filter(student => comment.student_id === student)
    //    console.log(userComments);
    //     };
    //     getUserComments(); 
    //     return results
    // };
    // document.querySelector('#userSelect').setAttribute('hidden', true);
    // document.querySelector('#manageComments').removeAttribute('hidden');
    // I just need to get an array of all the comments, then filter by student_id
    const response = await fetch(`/api/comment/`, {
        method: 'GET',
    });
    if (response.ok) {
        // console.log(JSON.stringify(response.body));
        console.log(JSON.stringify(response));
        // document.location.replace('/comments')
    } else {
        alert(response.statusText);
    };
}
// filter the comments where user id we grabbed === Comment.student_id
// create the elements using the bootstrap components on lines 53 through 61 of the comment.handlebars file
// populate text areas with comment history


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