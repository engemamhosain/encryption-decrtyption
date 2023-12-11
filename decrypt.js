const CryptoJS = require('crypto-js');
const _iv_ut = CryptoJS.enc.Utf8.parse(process.env.IV);
const securitykey_ut = CryptoJS.enc.Utf8.parse(process.env.KEY);
const decryptForNewToken=(token)=> {
    let _key = securitykey_ut
    let _iv = _iv_ut

    this.decrypted = CryptoJS.AES.decrypt(token, _key, {
      keySize: 32,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return this.decrypted;
}




module.exports = {
  decryptForNewToken: decryptForNewToken
};