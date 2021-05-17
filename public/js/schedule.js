const createEventHandler = async (event) => {
    event.preventDefault();

    const pickedDate = document.querySelector('#datepicker').value
    const userStartTime = document.querySelector('#startTime-scheduleLesson').value;
    const studentInfo = document.querySelector('#studentName-scheduleLesson').value;
    const studentName = studentInfo.split(" ")[1] + ' ' + studentInfo.split(" ")[2]
    const studentId = parseInt(studentInfo.split(" ")[0]) 

    const teacher_name = localStorage.getItem('fullName')
    const description = `${studentName}'s Lesson with ${teacher_name}`
    const summary = `${studentName}'s Lesson with ${teacher_name}`
    
    const month = parseInt(pickedDate.split("/")[0]);
    const day = parseInt(pickedDate.split("/")[1]);
    const year = parseInt(pickedDate.split("/")[2]);
    const hour = parseInt(userStartTime)

    
    //fectch request through api route!
    if(pickedDate && hour && summary) {
        console.log(`month ${month} day ${day} year ${year} hour ${hour} summary ${summary}`)
        console.log(studentInfo)
        console.log(`studentName ${studentName} studentId ${studentId}`)
        const response = await fetch('/api/events/', {
            method: 'POST',
            body: JSON.stringify({ year, month, day, hour, summary, description, studentId }),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            alert(`You have successfully scheduled ${studentName}'s lesson for ${pickedDate} at ${hour}:00.`)
            document.location.replace('/schedule');
         } else {
             alert('Failed to schedule event')// change to a modal
        }

    }
   
}

document
    .querySelector('.scheduleLessonForm')
    .addEventListener('submit', createEventHandler)
