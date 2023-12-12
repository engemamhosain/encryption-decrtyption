const result = require('dotenv').config();

const encryption = require('./encrypt');
const decryption = require('./decrypt');
if (result.error) {
  console.error(result.error);
}

var message="test message 1702289855530"
var encrypted_token = encryption.encryptForNewToken(message)
console.log(encrypted_token)

var decrypted_token=decryption.decryptForNewToken(encrypted_token)
console.log(decrypted_token)