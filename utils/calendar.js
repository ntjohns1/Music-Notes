const { google } = require('googleapis');
require('dotenv').config();
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const fetch = require("node-fetch");

var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

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

        let event = new Date(Date.parse(newDateTime));

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
            getNewCalendarId(event);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

function getNewCalendarId(newEvent) {
    const getEvents = async (dateTimeStart, dateTimeEnd) => {

        try {
            let response = await calendar.events.list({
                auth: auth,
                calendarId: calendarId,
                timeMin: dateTimeStart,
                timeMax: dateTimeEnd,
                timeZone: 'America/Chicago'
            });

            let items = response['data']['items'];
            return items;
        } catch (error) {
            console.log(`Error at getEvents --> ${error}`);
            return 0;
        }
    };

    let start = newEvent;
    let end = newEvent;

    getEvents(start, end)
        .then((res) => {
            let calendar_Id = res[0].id;
            saveCalendarId(calendar_Id);
        })
        .catch((err) => {
            console.log(err);
        });

};

function saveCalendarId(calendar_id) {
    const getUsers = async () => {
        const event = await sequelize.query("SELECT * FROM event", { type: QueryTypes.SELECT });
        let last_element = event[event.length - 1];
        inputId(last_element.id);
    };

    const inputId = async (id) => {
        const response = await fetch(`http://localhost:3001/api/events/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ calendar_id: calendar_id }),
            headers: { 'Content-Type': 'application/json' },
        })
    };

    getUsers();
};

function deleteEvent(eventId) {
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

    deleteEvent(eventId)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { insertNewEvent, deleteEvent };