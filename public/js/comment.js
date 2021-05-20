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
    const studentInfo = document.querySelector('#userSelect').value;
    const studentName = studentInfo.split(" ")[1] + ' ' + studentInfo.split(" ")[2]
    const commentText = document.querySelector('#commentTextarea').value.trim();
    const content = `${commentText} (${studentName})`
    const user_id = parseInt(studentInfo.split(" ")[0]) 

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

async function deleteComment(event) {
    event.preventDefault();
    const commentId = $(this).val()

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

async function editComment(event) {
    event.preventDefault();

    const id = $(this).val()
    const date = moment().format('YYYY-MM-DD');
    const content = $(this).closest('tr').children().eq(1).children().val().trim()
    

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

$(document).on('click', '#deleteBtn', deleteComment);
$(document).on('click', '#editBtn', editComment)