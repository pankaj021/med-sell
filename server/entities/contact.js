function makeContact({photos, names, emailAddresses, phoneNumbers}) {
    let name = photo = email = phone = "";

    if (names && names.length > 0) {
        name = names[0].displayName;
    }
    if (photos && photos.length > 0) {
        photo = photos[0].url;
    }
    if (emailAddresses && emailAddresses.length > 0) {
        email = emailAddresses[0].value;
    }
    if (phoneNumbers && phoneNumbers.length > 0) {
        phone = phoneNumbers[0].value;
    }

    return { name, photo, email, phone }
}

module.exports = makeContact;