const {google} = require('googleapis');
const getOauth2Client = require('../use-cases/google/getOauth2Client');
const getConnectionList = require('../use-cases/google/getConnectionList');

function getContacts(req, res, next) {
    const token = req.body.token;
    const auth = getOauth2Client(token, google);
    const service = google.people({version: 'v1', auth});
    getConnectionList(service.people.connections)
    .then((contacts) => {
        res.status(200).json(contacts);
    })
    .catch(next);
}

module.exports = getContacts;