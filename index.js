const result = require('dotenv').config();

const encryption = require('./encrypt');
const decryption = require('./decrypt');
if (result.error) {
  console.error(result.error);
}

var message="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36. . .1702289855530"
var encrypted_token = encryption.encryptForNewToken(message)
console.log(encrypted_token)

var decrypted_token=decryption.decryptForNewToken(encrypted_token)
console.log(decrypted_token)