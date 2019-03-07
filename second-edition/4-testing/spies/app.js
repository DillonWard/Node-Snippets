var db = require('./db');

module.exports.handleSignup = (email, password) =>{
    // Check if the email exists
    db.saveUser({
        email,
        password
    });
    // Save the user
    // Send the welcome email
}