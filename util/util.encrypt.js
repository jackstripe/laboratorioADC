const bcrypt = require('bcrypt');

// Hashing a password
function encrypt(){
    const saltRounds = 10;
    const myPlaintextPassword = 'password';
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
    });
}

function validate(){
    // Comparing a password
    const someOtherPlaintextPassword = 'someOtherPassword';
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
        // result == true or false
    });
}

modules.export={
    encrypt
}