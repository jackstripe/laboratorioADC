const bcrypt = require('bcrypt');

// Hashing a password
async function encryptPwd(plaintextPassword){
    console.log(plaintextPassword );
    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt
        const hashedText = await bcrypt.hash(String(plaintextPassword), salt); // Hash the text using the salt
        return hashedText; // Return the hashed text
    } catch (err) {
        console.log(err);
        return null; // Return null in case of error
    }
}

function validate(plaintextPassword, hashed){
    // Comparing a password
    const someOtherPlaintextPassword = 'someOtherPassword';
    bcrypt.compare(plaintextPassword, hashed, function(err, result) {
        return result
    });
}

module.exports={
    encryptPwd,
    validate
}