var Queue = require('bull');
var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');

// Empty
helloWorldQueue.empty().done(function(content){
  console.log('Queue emptied...', content);
  process.exit(200); // Done
});