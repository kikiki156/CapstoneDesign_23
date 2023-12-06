const request = require('request');

const pgConnection = require('../dbconn');

exports.getClassHour = async function (req, res) {
    console.log("getClassHour");
    console.log(req.body);

    await _getClassHour(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

async function _getClassHour(body) {
    const user_id = body.user_id;

    let query = '' +
        'SELECT * ' +
        'FROM edulog.user_subject ' +
        'WHERE user_id = $1';

    let values = [user_id];
    let result = await pgConnection.query(query, values);

    
    console.log(result.rows);

    
    let subject_name = {};
    let user_subject_hour = {};

    for (let i = 0; i < result.rows.length; i++) {
        if (subject_name[result.rows[i].subject_id] == undefined) {
            let query2 = '' +
                'SELECT subject_name ' +
                'FROM edulog.subject ' +
                'WHERE subject_id = $1';
            let values = [result.rows[i].subject_id];
            let result2 = await pgConnection.query(query, values);
            subject_name[result.rows[i].subject_id] = result2.rows[0].subject_name;
        }
        if (user_subject_hour[subject_name[result.rows[i].subject_id]] == undefined) {
            user_subject_hour[subject_name[result.rows[i].subject_id]] = result.rows[i].user_subject_hour;
        } else {
            user_subject_hour[subject_name[result.rows[i].subject_id]] += result.rows[i].user_subject_hour;
        }
    }

    console.log(user_subject_hour);

    return {
        status: 200,
        user_subject_hour: user_subject_hour,
    };
}
