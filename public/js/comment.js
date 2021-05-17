// **user hits "go" app shows add comment section and hides dropdown
// add submit button under text area that calls addComment, format inputs to match 
// **set attribute hidden back to false for text area and comment history
// page script needs to fetch the comments for that student and populate the UI with them (id=commentHistory)
// filter the comments where user id we grabbed === Comment.student_id
// create the elements using the bootstrap components on lines 53 through 61 of the comment.handlebars file
// populate text areas with comment history
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

const addComment = async (event) => {
    event.preventDefault();
    const date = moment().format('YYYY-MM-DD');
    const content = document.querySelector('#commentTextarea').value.trim();
    const user_id = document.querySelector('#userSelect').value;
    if (date && content && user_id) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ date, content, user_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/comments');
        } else {
            alert('Failed to add comment')// change to a modal
        }
    }
}

const deleteComment = async (event) => {
    event.preventDefault();
const commentId = document.querySelector('#deleteBtn').value
    if (commentId) {
        const id = commentId;
        const response = await fetch(`/api/comment/${id}`, {
          method: 'DELETE',
        });  
        if (response.ok) {
          document.location.replace('/comments');
        } else {
          alert('Failed');
        }
      }    
}

const editComment = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#editBtn').value;
    const date = moment().format('YYYY-MM-DD');
    const content = document.querySelector('#pastCommentTxt').value.trim();
    if ( id && content) {
        const response = await fetch(`/api/comment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, date, content }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/comments');
            console.log(content);
        } else {
            alert('Failed to add comment')// change to a modal
        }
    }
}

document
.querySelector('#userSelectBtn')
.addEventListener('click', selectStudent);
document
.querySelector('#addCommentBtn')
.addEventListener('click', addComment);
document
.querySelector('#deleteBtn')
.addEventListener('click', deleteComment);
document
.querySelector('#editBtn')
.addEventListener('click', editComment);