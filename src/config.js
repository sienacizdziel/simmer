// src/config.js
const API_KEY = '47083994';
const API_SECRET = '7c7a8106d3bed108f1b40c4ec2ccfaa49487821e';
var OpenTok = require('opentok'),
opentok = new OpenTok(API_KEY, API_SECRET);
var sessionId, token;

// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession({mediaMode: "routed"}, function(err, session) {
  if (err) return console.log(err);
  else {
    sessionId = session.sessionId;
    token = opentok.generateToken(sessionId);
    console.log(token);
    console.log(sessionId);
  }
});

console.log(token);
console.log(sessionId);


export default {
    API_KEY: API_KEY,
    SESSION_ID: sessionId ? sessionId : null,
    TOKEN: token ? token : null
  };