const selectStudent = async (event) => {
    event.preventDefault();
    const student = document.querySelector('#userSelect').value;
    const response = await fetch(`/api/comment/`, {
        method: 'GET',
    });
    if (response.ok) {
        console.log(JSON.stringify(response));
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
            alert('Failed to add comment')
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
        } else {
            alert('Failed to add comment')
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