const {google} = require('googleapis');
const getOauth2Client = require('../../use-cases/google/getOauth2Client');
const getGoogleUser = require('../../use-cases/google/getGoogleUser');
const {AuthenticationError} = require('../errors');

module.exports = async (req, res, next) => {
    const {token} = req.body;
    getOauth2Client(token, google);
    try {
        const {data} = await getGoogleUser(token);
        if(data.verified_email && (data.name || data.email)) req.AZAD_USER = data;
        else throw new AuthenticationError('Unable to verify your google account');
        next();
    } catch (error) {
        next(new AuthenticationError(error.message));
    }
}