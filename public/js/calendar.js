require('dotenv').config();
const {google} = require('googleapis');
const {OAuth2} = google.auth;
const OAuth2Client = new OAuth2('', '');
const calendar = google.calendar({version: 'v3', auth: OAuth2Client});

OAuth2Client.setCredentials({refresh_token: ''});

//Below is hard-coded event creator. Will need to make it dynamic. This is just testing material to make sure we can do it. It does work. 
const eventStartTime = new Date();

eventStartTime.setDate(eventStartTime.getDay() + 3);

const eventEndTime = new Date();

eventEndTime.setDate(eventEndTime.getDay() + 3);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

// const event = {
//     summary: 'Test Meeting',
//     description: 'Test Meeting for Project 10 from NodeJS',
//     start: {
//         dateTime: eventStartTime,
//         timeZone: 'America/Denver',
//     },
//     end: {
//         dateTime: eventEndTime,
//         timeZone: 'America/Denver',
//     },
//     colorId: 1,
// };

// calendar.freebusy.query({
//     resource: {
//         timeMin: eventStartTime,
//         timeMax: eventEndTime,
//         timeZone: 'America/Denver',
//         items: [{id: 'primary'}],
//     },
// }, (err, res) => {
//     if (err) return console.error('Free Busy Query Error', err);
    
//     const eventsArr = res.data.calendars.primary.busy;

//     if (eventsArr.length === 0) return calendar.events.insert({
//         calendarId: 'primary',
//         resource: event
//     }, (err) => {
//         if (err) return console.error("Calendar Event Creation Error: ", err);

//         return console.log('Calendar Event Created');
//     })

//     return console.log('Sorry, I am busy');
// });

function removeEvents(auth, calendar){
    calendar.events.delete({
      auth: auth,
      calendarId: 'primary',
      eventId: "cTB2NDhhbnEzb2liZTNkbHBmMnJwZ3NmNnMgbXVzaWNub3Rlc2xlc3NvbnNAbQ",
    }, function(err) {
      if (err) {
        console.log('Error: ' + err);
        return;
      }
      console.log("Removed");
    });
  };

  removeEvents();