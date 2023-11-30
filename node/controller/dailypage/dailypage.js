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

exports.checklistCreate = async function (req, res) {
    console.log("checklistCreate");
    console.log(req.body);
    
    await _checklistCreate(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.checklistDelete = async function (req, res) {
    console.log("checklistDelete");
    console.log(req.body);
    
    await _checklistDelete(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.cheklistUpdate = async function (req, res) {
    console.log("cheklistUpdate");
    console.log(req.body);
    
    await _checklistUpdate(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.checklistRead = async function (req, res) {
    console.log("checklistRead");
    console.log(req.body);
    
    await _checklistRead(req.body).then((response) => {
        res.status(response.status).send(response);
        res.render('dailypage', { title: 'Express' });
    }).catch((err) => {
        console.log(err);
    });
}

async function _scheduleCreate(body) {
    const schedule_date = body.schedule_date;
    const schedule_time = body.schedule_time;
    const schedule_title = body.schedule_title;
    const schedule_classroom = body.schedule_classroom;
    const scehdule_content = body.scehdule_content;
    const user_id = body.user_id;

    let insert_query = '' +
        'INSERT INTO edulog.schedule (schedule_date, schedule_time, schedule_title, schedule_classroom, scehdule_content, user_id) ' +
        'VALUES ($1, $2, $3, $4, $5, $6)';

    let result = null;
    try {
        result = await pgConnection.query(insert_query, [schedule_date, schedule_time, schedule_title, schedule_classroom, scehdule_content, user_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _scheduleDelete(body) {
    const schedule_id = body.schedule_id;

    let delete_query = '' +
        'DELETE FROM edulog.schedule ' +
        'WHERE schedule_id = $0';

    let result = null;
    try {
        result = await pgConnection.query(delete_query, [schedule_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _scheduleUpdate(body) {
    const schedule_id = body.schedule_id;
    const schedule_date = body.schedule_date;
    const schedule_time = body.schedule_time;
    const schedule_title = body.schedule_title;
    const schedule_classroom = body.schedule_classroom;
    const scehdule_content = body.scehdule_content;
    const user_id = body.user_id;

    let update_query = '' +
        'UPDATE edulog.schedule ' +
        'SET schedule_date = $1, schedule_time = $2, schedule_title = $3, schedule_classroom = $4, scehdule_content = $5 ' +
        'WHERE schedule_id = $0';

    let result = null;
    try {
        result = await pgConnection.query(update_query, [schedule_date, schedule_time, schedule_title, schedule_classroom, scehdule_content, schedule_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }
    if (result.rowCount === 0) {
        return {
            status: 404,
            message: "Not Found",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _scheduleRead(body) {
    const user_id = body.user_id;

    let select_query = '' +
        'SELECT schedule_id, schedule_date, schedule_time, schedule_title, schedule_classroom, scehdule_content ' +
        'FROM edulog.schedule ' +
        'WHERE user_id = $6 AND schedule_date = ';

    let result = null;
    try {
        result = await pgConnection.query(select_query, [user_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }
    if (result.rowCount === 0) {
        return {
            status: 404,
            message: "Not Found",
        }
    }else{
        return {
        status: 200,
        message: "OK",
        data: result.rows,
        };
    };
}

async function _checklistCreate(body) {
    const checklist_date = body.checklist_date;
    const checklist_content = body.checklist_content;
    const checklist_complete = body.checklist_complete;
    const user_id = body.user_id;

    let insert_query = '' +
        'INSERT INTO edulog.checklist (checklist_date,  checklist_content, checklist_complete, user_id) ' +
        'VALUES ($1, $2, $3, $4, $5, $6)';

    let result = null;
    try {
        result = await pgConnection.query(insert_query, [checklist_date, checklist_content, checklist_complete, user_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _checklistDelete(body) {
    const checklist_id = body.checklist_id;

    let delete_query = '' +
        'DELETE FROM edulog.checklist ' +
        'WHERE checklist_id = $0';

    let result = null;
    try {
        result = await pgConnection.query(delete_query, [checklist_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _checklistUpdate(body) {
    const checklist_id = body.checklist_id;
    const checklist_date = body.checklist_date;
    const checklist_content = body.checklist_content;
    const checklist_complete = body.checklist_complete;
    const user_id = body.user_id;

    let update_query = '' +
        'UPDATE edulog.checklist ' +
        'SET checklist_date = $1,  checklist_content = $2, checklist_complete = $3' +
        'WHERE checklist_id = $0';

    let result = null;
    try {
        result = await pgConnection.query(update_query, [checklist_date, checklist_content, checklist_complete, checklist_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }
    if (result.rowCount === 0) {
        return {
            status: 404,
            message: "Not Found",
        }
    }

    return {
        status: 200,
        message: "OK",
    };
}

async function _checklistRead(body) {
    const user_id = body.user_id;

    let select_query = '' +
        'SELECT checklist_id, checklist_date, checklist_content, checklist_complete ' +
        'FROM edulog.checklist ' +
        'WHERE user_id = $4 AND checklist_date = $1';

    let result = null;
    try {
        result = await pgConnection.query(select_query, [user_id]);
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Internal Server Error",
        }
    }
    if (result.rowCount === 0) {
        return {
            status: 404,
            message: "Not Found",
        }
    }else{
        return {
        status: 200,
        message: "OK",
        data: result.rows,
        };
    };
}