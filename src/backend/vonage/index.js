// Set the following constants with the API key and API secret
// that you receive when you sign up to use the OpenTok API:
var opentok = new OpenTok(47083994, 7c7a8106d3bed108f1b40c4ec2ccfaa49487821e
);

//Generate a basic session. Or you could use an existing session ID.
var sessionId;
opentok.createSession({}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
  }
});

var token = opentok.generateToken(sessionId);