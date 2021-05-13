// **user hits "go" app shows add comment section and hides dropdown
// add submit button under text area that calls addComment, format inputs to match 
// **function to hide/show appropriate page content
// page script needs to fetch the comments for that student and populate the UI with them (id=commentHistory)
// add event listeners to edit and delete buttons on comment history
const { User, Comment } = require('../../models');
const { findAll } = require('../../models/User');

const selectStudent = async (event) => {
    event.preventDefault();
    const student = document.querySelector('#userSelect').value.trim();

    // figure out how to grab the id for the selected user
    // document.querySelector('#userSelect').setAttribute('hidden', true);
    // document.querySelector('#manageComments').removeAttribute('hidden');
    const commentData = await Comment.findAll().catch((err) => {
        res.json(err);
    });
    // filter the comments where user id we grabbed === Comment.student_id
    // create the elements using the bootstrap components on lines 53 through 61 of the comment.handlebars file
}

const viewComments = async (event) => {
    event.preventDefault();
    //select a student or findbyPK() and grab all the comments for that student along with the associated data
}


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

document
    .querySelector('.comment-form')
    .addEventListener('submit', addComment);
document
    .querySelector('#userSelectBtn')
    .addEventListener('submit', selectStudent);