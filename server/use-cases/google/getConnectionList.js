const {ApiReturnedError, NoConnectionFound} = require('../../middlewares/errors');
const makeContact = require('../../entities/contact');

function getConnectionList(connectionsService) {
    return new Promise((resolve, reject) => {
        connectionsService.list({
            resourceName: 'people/me',
            pageSize: 500,
            personFields: 'photos,names,emailAddresses,phoneNumbers',
            sortOrder: "FIRST_NAME_ASCENDING",
        }, (err, res) => {
            if (err) {
                return reject(new ApiReturnedError(err.message));
            }
            const connections = res.data.connections;
            if (connections) {
                return resolve(connections.map((person) => makeContact(person)));
            } else {
                return resolve([]);
            }
        });
    })
}

module.exports = getConnectionList;