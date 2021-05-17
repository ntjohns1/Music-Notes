# Music Notes
```jsx
AS A music teacher
I WANT an application for myself and my students
SO I CAN manage my students, add or remove students, schedule lessons, and send comments
SO USERS can log into their account, view their schedule, and see my comments to them

```

---

## Description 

[Music Notes](https://uncbootcampmusicnotes.herokuapp.com/) is an application to help music teachers easily manage their students. Users with a teacher role can remove students, send them comments, update or delete existing comments, and create events in the student users calendar. Users with student roles can log in, view comments from their teacher, and view their schedule. This deployed application uses `MySQL` and the `Sequelize ORM` for the database.<br>
Calendar data ia managed using the [Google Calendar API](https://developers.google.com/calendar).<br>
`GET`, `POST`, and `PUT` routes have been implemented for retrieving and adding new student data.

## Table of Contents

  - [Description](#description)
  - [Table of Contents](#table-of-contents)
    - [Features](#features)
    - [Credits](#credits)
    - [Future Developments](#future-developments)
  - [Technologies Used](#technologies-used)
  - [Usage](#usage)
  - [License](#license)



### Features
* When application home page loads, the homepage is displayed with the header and its menu options (Home, Log In, Log Out).
* When teacher user clicks "Log In", the login page loads, upon entering their email and password, they are directed to the Teacher Portal.
* When teacher user clicks "Manage Students", they will see a list of their current students. They will see a form to add new students.
  * When teacher submits the "Add Student" form, they will be alerted that student was succesfully added and a randomly generated password will appear.
  * The new student user data will be sent to the database and an automatically generated password will be populated in the database.
  * The student management page will reload and the list of current students will then update with the new student.
  * The student management page will reload and the list of current students includes an "update" button and a "delete" button.
  * Teacher can update student name fields and email fields. When teacher clicks on "update" the page will refresh with updated user data.
  * When teacher clicks "delete" the student list will automatically update with the selected student removed.
  * The student user data will also be removed from the database.
* When teacher clicks the "Manage Calendar" link, the scheduling page will load with a form to schedule a lesson.
  * When form is submited, the data is then sent to the users calendar using the Google Calendar API.
* When teacher clicks on the "Calendar" link their calendar is displayed.
* When teacher clicks on the "Lesson Comments" link, a form apears with a dropdown of the students.
* When teacher clicks "Go" button they will see the students comment data.
* When teacher clics the "Send" button they can submit new comments.

### Credits
[Suejin Kim](https://github.com/suejinkim20), [Hannah Lee](https://github.com/hanlee-311), [Nelson Johns](https://github.com/ntjohns1), [Jackie Alvarez](https://github.com/jaque-leen)


### Future Developments
* Student view and a teacher view
* Delete events that will delete from Google API and our own database
* Invoicing
* Emailing

---

## Technologies Used
* [Node.js](https://nodejs.org/en/docs/)
* [Sequelize](https://sequelize.org/)
* [express](http://expressjs.com/en/api.html)
* [Google Calendar API](https://developers.google.com/calendar)
* JavaScript/jQuery

---

## Usage
Deployed link: https://uncbootcampmusicnotes.herokuapp.com/ <br>
Github Repo Link: https://github.com/ntjohns1/Project-2-Group-10

<img src="./public/images/teacherportal.jpg" alt="Teacher Portal View" width="auto" height="200">

---

## Badges

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><br>

<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><br>

<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><br>

<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/><br>

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><br>

<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>

---

## License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)<br>


