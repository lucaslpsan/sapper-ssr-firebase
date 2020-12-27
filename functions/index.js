const functions = require('firebase-functions');
const { sapperServer } = require('./__sapper__/build/server/server.js');

exports.ssr = functions.https.onRequest(sapperServer); // see the server.js later for the name

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
