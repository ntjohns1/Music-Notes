const grabEventData = async (event) => {
    event.preventDefault();

    const pickedDate = document.querySelector('#datepicker').value
    const userStartTime = document.querySelector('#startTime-scheduleLesson').value;
    const studentName = document.querySelector('#studentName-scheduleLesson').value
    //const studentId = document.querySelector('#studentId-scheduleLesson').value;
    //const teacherId = document.querySelector('#teacherId-scheduleLesson').value;
    const description = `${studentName}'s Lesson with Mr. Music Teacher`
    const summary = `${studentName}'s Lesson with Mr. Music Teacher`
    
    const month = parseInt(pickedDate.split("/")[0]);
    const day = parseInt(pickedDate.split("/")[1]);
    const year = parseInt(pickedDate.split("/")[2]);
    const hour = parseInt(userStartTime)

    
    //fectch request through api route!
    if(pickedDate && hour && summary) {
        console.log(`month ${month} day ${day} year ${year} hour ${hour} summary ${summary}`)
        const response = await fetch('/api/events/', {
            method: 'POST',
            body: JSON.stringify({ year, month, day, hour, summary, description }),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
             document.location.replace('/schedule');
         } else {
             alert('Failed to schedule event')// change to a modal
        }

    }
   
}

document
    .querySelector('.scheduleLessonForm')
    .addEventListener('submit', grabEventData)
