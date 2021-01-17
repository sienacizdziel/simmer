// src/config.js
const API_KEY = '47084764';
const API_SECRET = 'da0b0cc2242f8ffc58b0e614202d4d6f8f913e66';
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

token = "T1==cGFydG5lcl9pZD00NzA4NDc2NCZzaWc9YjliZjk2NTAyNDQ0OTc3NDA3NjBjNWEzMjI1MTU1YTkzNDYzNDlkODpzZXNzaW9uX2lkPTJfTVg0ME56QTRORGMyTkg1LU1UWXhNRGcwTWpNME1UZzVNMzVKY2k5TmFHVmlkelp1V2pseWRXRXpUMkZoVjA1aldUbC1mZyZjcmVhdGVfdGltZT0xNjEwODQyMzUyJm5vbmNlPTAuNTUzOTEyNTkzNjIyMjgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYxMzQzNDM1MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
sessionId = "2_MX40NzA4NDc2NH5-MTYxMDg0MjM0MTg5M35Jci9NaGVidzZuWjlydWEzT2FhV05jWTl-fg"


export default {
    API_KEY: API_KEY,
    SESSION_ID: sessionId ? sessionId : null,
    TOKEN: token ? token : null
  };