var PriorityQueue = require('bull/lib/priority-queue');
var opts = {"priority": "critical", "attempts": 4};
var helloWorldQueue = PriorityQueue('hello world', 6379, '127.0.0.1');

// Empty
helloWorldQueue.empty().done(function(content){
  console.log('Priority Queue emptied...', content);
  process.exit(200); // Done
});