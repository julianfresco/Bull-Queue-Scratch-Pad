var Queue = require('bull');
var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');

// Define how the queue is processed
helloWorldQueue.count().done(function(count){
  console.log('Queue count: ', count);
  process.exit(200); // Done
});