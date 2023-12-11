
const CryptoJS = require('crypto-js');
const _iv_ut = CryptoJS.enc.Utf8.parse(process.env.IV);
const securitykey_ut = CryptoJS.enc.Utf8.parse(process.env.KEY);

const encryptForNewToken = (data) => {
    let _key = securitykey_ut;
    let _iv = _iv_ut;

    let encrypted = CryptoJS.AES.encrypt(data, _key, {
        keySize: 32,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString();
}

module.exports = {
    encryptForNewToken: encryptForNewToken
  };