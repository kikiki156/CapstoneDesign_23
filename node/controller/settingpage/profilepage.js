const request = require('request');

const pgConnection = require('../dbconn');

exports.updateProfile = async function (req, res) {
    console.log("updateProfile");
    console.log(req.body);
    
    await _updateProfile(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

async function _updateProfile(body) {
    const user_id = body.id;
    const school = body.school;
    const role = body.role;
    const class_year = body.class;
    const class_room = body.classroom;
    const subject = body.subject;

    let query = '' +
        'UPDATE edulog.user ' +
        'SET user_school = $1, user_role = $2, user_class_year = $3, user_class_room = $4, user_subject = $5 ' +
        'WHERE user_id = $6' +
        'INNER JOIN edulog.school ON user_school = school_id ';
    
    let result = await pgConnection.query(query, [school, role, class_year, class_room, subject, user_id]);
    console.log(result);


}