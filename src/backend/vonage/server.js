var OpenTok = require('opentok'),
    opentok = new OpenTok("47083994", "7c7a8106d3bed108f1b40c4ec2ccfaa49487821e");

// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession(function(err, session) {
    if (err) return console.log(err);
  
    // save the sessionId
    db.save('session', session.sessionId, done);
  });
  
  // The session will use the OpenTok Media Router:
  opentok.createSession({mediaMode:"routed"}, function(err, session) {
    if (err) return console.log(err);
  
    // save the sessionId
    db.save('session', session.sessionId, done);
  });
  
  // A Session with a location hint
  opentok.createSession({location:'12.34.56.78'}, function(err, session) {
    if (err) return console.log(err);
  
    // save the sessionId
    db.save('session', session.sessionId, done);
  });
  
  // A Session with an automatic archiving
  opentok.createSession({mediaMode:'routed', archiveMode:'always'}, function(err, session) {
    if (err) return console.log(err);
  
    // save the sessionId
    db.save('session', session.sessionId, done);
  });


  

  // Generate a Token from just a sessionId (fetched from a database)
token = opentok.generateToken(sessionId);

// Generate a Token from a session object (returned from createSession)
token = session.generateToken();

// Set some options in a Token
token = session.generateToken({
  role :                   'moderator',
  expireTime :             (new Date().getTime() / 1000)+(7 * 24 * 60 * 60), // in one week
  data :                   'name=Johnny',
  initialLayoutClassList : ['focus']
});
