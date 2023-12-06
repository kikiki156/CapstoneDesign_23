const request = require('request');

const pgConnection = require('../dbconn');

exports.acceptLogin = async function (req, res) {
    console.log("acceptLogin");
    console.log(req.body);
    
    await _acceptLogin(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}

exports.acceptCreate = async function (req, res) {
    console.log("acceptCreate");
    console.log(req.body);
    
    await _acceptCreate(req.body).then((response) => {
        res.status(response.status).send(response);
    }).catch((err) => {
        console.log(err);
    });
}


async function _acceptLogin(body) {
    const email = body.email;
    const password = body.password;

    // 이메일과 비밀번호를 통해 사용자 정보를 가져온다.
    let query = '' +
        'SELECT user_id, user_name, user_password FROM edulog.user ' +
        'WHERE user_email = $1';

    let result = await pgConnection.query(query, [email, password]);
    console.log(result);

    
    if (result.rowCount === 0) {
        return {
            status: 404,
            id: 0,
            name: null,
        }
    }
    const password_db = result.rows[0].user_password;
    
    if (password_db !== password) {
        return {
            status: 401,
            id: 0,
            name: null,
        }
    } else return { 
        status: 200,
        id: result.rows[0].user_id,
        name: result.rows[0].user_name,
    };
}

async function _acceptCreate(body) {
    const name = body.name;
    const email = body.email;
    const password = body.password;

    let insert_query = '' +
        'INSERT INTO edulog.user (user_name, user_email, user_password) ' +
        'VALUES ($1, $2, $3)';
    let result = null;

    try {
        result = await pgConnection.query(insert_query, [name, email, password]);
    } catch (err) {
        console.log(err);
        console.log("이미 존재하는 이메일입니다.");
        return {
            status: 409,
        }
    }
    console.log(result);
    return {
        status: 200,
    };
}

