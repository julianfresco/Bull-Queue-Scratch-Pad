var PriorityQueue = require('bull/lib/priority-queue');
var opts = {"priority": "critical", "attempts": 4};
var helloWorldQueue = PriorityQueue('hello world', 6379, '127.0.0.1');

// Define how the queue is processed
helloWorldQueue.count().done(function(count){
  console.log('Priority Queue count: ', count);
  process.exit(200); // Done
});