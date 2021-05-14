const grabEventData = async (event) => {
    event.preventDefault();

    const pickedDate = document.querySelector('#datepicker').value
    const userStartTime = document.querySelector('#startTime-scheduleLesson').value;
    const studentName = document.querySelector('#studentName-scheduleLesson').value
    //const studentId = document.querySelector('#studentId-scheduleLesson').value;
    //const teacherId = document.querySelector('#teacherId-scheduleLesson').value;
    const description = `${studentName}'s Lesson with Mr. Music Teacher`
    const summary = `${studentName}'s Lesson with Mr. Music Teacher`
    
    console.log(pickedDate);

    const month = pickedDate.split("/")[0];
    const day = pickedDate.split("/")[1];
    const year = pickedDate.split("/")[2];
    const hour = userStartTime

    console.log (`Lesson date: Month ${month}, Day ${day}, Year ${year}`)
    console.log (`Lesson time: ${userStartTime}`)
    console.log (summary)
    
    //fectch request through api route!
   
}

document
    .querySelector('.scheduleLessonForm')
    .addEventListener('submit', grabEventData)
