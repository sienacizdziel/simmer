var OpenTok = require('opentok'),
opentok = new OpenTok('47083994', '7c7a8106d3bed108f1b40c4ec2ccfaa49487821e');

// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession(function(err, session) {
  if (err) return console.log(err);

  // // save the sessionId
  // db.save('session', session.sessionId, done);
  sessionId = session.sessionId;
});

// Generate a Token from a session object (returned from createSession)
const token = opentok.generateToken(sessionId);

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

// Create a publisher
var publisher = OT.initPublisher('publisher', {
  insertMode: 'append',
  width: '100%',
  height: '100%'
}, handleError);

// Connect to the session
session.connect(token, function(error) {
  // If the connection is successful, publish to the session
  if (error) {
    handleError(error);
  } else {
    session.publish(publisher, handleError);
  }
});