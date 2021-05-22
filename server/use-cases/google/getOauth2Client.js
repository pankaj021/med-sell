const {CLIENT_ID, CLIENT_SECRET, REDIERECT_URL} = process.env;

function getOauth2Client(token, google) {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIERECT_URL);
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
}

module.exports = getOauth2Client;
