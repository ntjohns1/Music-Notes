const { google } = require('googleapis');
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);

function insertNewEvent(newYear, newMonth, newDay, newHour, summary, description) {
    const dateTimeForCalander = () => {

        let date = new Date();

        let year = newYear;

        let month = newMonth;
        if (month < 10) {
            month = `0${month}`;
        }

        let day = newDay;
        if (day < 10) {
            day = `0${day}`;
        }
        let hour = newHour;
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let minute = 00;
        if (minute < 10) {
            minute = `0${minute}`;
        }

        let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000`;
        console.log(newDateTime);

        let event = new Date(Date.parse(newDateTime));
        console.log(event);

        let startDate = event;
        let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1));

        return {
            'start': startDate,
            'end': endDate
        }
    };

    const insertEvent = async (event) => {

        try {
            let response = await calendar.events.insert({
                auth: auth,
                calendarId: calendarId,
                resource: event
            });

            if (response['status'] == 200 && response['statusText'] === 'OK') {
                return 1;
            } else {
                return 0;
            }
        } catch (error) {
            console.log(`Error at insertEvent --> ${error}`);
            return 0;
        }
    };

    let dateTime = dateTimeForCalander();

    let event = {
        'summary': summary,
        'description': description,
        'start': {
            'dateTime': dateTime['start'],
            'timeZone': 'America/Chicago'
        },
        'end': {
            'dateTime': dateTime['end'],
            'timeZone': 'America/Chicago'
        }
    };

    insertEvent(event)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

function deleteEvent(calendar_id) {
    const deleteEvent = async (eventId) => {

        try {
            let response = await calendar.events.delete({
                auth: auth,
                calendarId: calendarId,
                eventId: eventId
            });

            if (response.data === '') {
                return 1;
            } else {
                return 0;
            }
        } catch (error) {
            console.log(`Error at deleteEvent --> ${error}`);
            return 0;
        }
    };

    let eventId = calendar_id;

    deleteEvent(eventId)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { insertNewEvent, deleteEvent };