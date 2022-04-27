const AlipaySdk = require('alipay-sdk').default
const fs = require('fs')
const path = require('path')

const alipaySdk = new AlipaySdk({
  appId: '2021000119675383',
  signType: 'RSA2',
  gateway: 'https://openapi.alipaydev.com/gateway.do',
  alipayPublicKey: fs.readFileSync(
    path.resolve(__dirname, './keys/publicKey.pem'),
    'utf-8'
  ),
  privateKey: fs.readFileSync(
    path.resolve(__dirname, './keys/privateKey.pem'),
    'utf-8'
  ),
  charset: 'utf-8'
})

// const alipaySdk = () => {
//   console.log(
//     fs.readFileSync(path.resolve(__dirname, './keys/publicKey.pem'), 'utf-8')
//   )
// }

// alipaySdk()

module.exports = alipaySdk
