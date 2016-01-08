var Queue = require('bull');
var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');

// Close
helloWorldQueue.close().done(function(content){
  console.log('Queue closed...', content);
  process.exit(200); // Done
});