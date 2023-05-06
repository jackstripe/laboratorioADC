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

async function validate(body){
    console.log("On Validate")
    plaintextPassword = body.password
    hashed = body.psswdDB.password
    console.log(plaintextPassword)
    console.log(hashed)

    const isValidPassword = await bcrypt.compare(String(plaintextPassword), hashed);
    console.log(isValidPassword + " On Util")
    return isValidPassword
    //bcrypt.compare(String(plaintextPassword), hashed,  function(err, result) {
    //    console.log(result + "ssd")
    //    return result
    //});
}

module.exports={
    encryptPwd,
    validate
}