const request = require('request');

const pgConnection = require('../dbconn');

exports.scheduleCreate = async function (req, res) {
    console.log("scheduleCreate");
    console.log(req.body);
    
    await _scheduleCreate(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.scheduleDelete = async function (req, res) {
    console.log("scheduleDelete");
    console.log(req.body);
    
    await _scheduleDelete(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.scheduleUpdate = async function (req, res) {
    console.log("scheduleUpdate");
    console.log(req.body);
    
    await _scheduleUpdate(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.scheduleRead = async function (req, res) {
    console.log("scheduleRead");
    console.log(req.body);
    
    await _scheduleRead(req.body).then((response) => {
        res.status(response.status).send(response);
        res.render('dailypage', { title: 'Express' });
    }).catch((err) => {
        console.log(err);
    });
}

async function _scheduleCreate(body) {
    const user_id = body.user_id;
    const schedule_title = body.schedule_title;
    const schedule_content = body.schedule_content;
    const schedule_date = body.schedule_date;
    const schedule_time = body.schedule_time;
    const schedule_color = body.schedule_color;

    let query = '' +
        'INSERT INTO edulog.schedule (schedule_title, schedule_content, schedule_date, schedule_time, schedule_color, user_id) ' +
        'VALUES ($1, $2, $3, $4, $5, $6)';

    let result = await pgConnection.query(query, [user_id, schedule_title, schedule_content, schedule_date, schedule_time, schedule_color]);
    console.log(result);

    return {
        status: 200,
    };
}

async function _scheduleDelete(body) {
    const schedule_id = body.schedule_id;

    let query = '' +
        'DELETE FROM edulog.schedule ' +
        'WHERE schedule_id = $0';

    let result = await pgConnection.query(query, [schedule_id]);
    console.log(result);

    return {
        status: 200,
    };
}

async function _scheduleUpdate(body) {
    const schedule_id = body.schedule_id;
    const schedule_title = body.schedule_title;
    const schedule_content = body.schedule_content;
    const schedule_date = body.schedule_date;
    const schedule_time = body.schedule_time;
    const schedule_color = body.schedule_color;

    let query = '' +
        'UPDATE edulog.schedule ' +
        'SET schedule_title = $2, schedule_content = $3, schedule_date = $4, schedule_time = $5, schedule_color = $6 ' +
        'WHERE schedule_id = $1';

    let result = await pgConnection.query(query, [schedule_id, schedule_title, schedule_content, schedule_date, schedule_time, schedule_color]);
    console.log(result);

    return {
        status: 200,
    };
}

async function _scheduleRead(body) {
    const user_id = body.user_id;

    let query = '' +
        'SELECT schedule_id, schedule_title, schedule_content, schedule_date, schedule_time, schedule_color ' +
        'FROM edulog.schedule ' +
        'WHERE user_id = $1';

    let result = await pgConnection.query(query, [user_id]);
    console.log(result);

    return {
        status: 200,
        result: result.rows,
    };
}