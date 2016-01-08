var PriorityQueue = require('bull/lib/priority-queue');
var opts = {"priority": "critical", "attempts": 4};
var helloWorldQueue = PriorityQueue('hello world', 6379, '127.0.0.1');

helloWorldQueue.on('cleaned', function (job, type) {
  console.log('Cleaned %s %s jobs', job.length, type);
});

// Clean
// Options: completed, waiting, active, delayed, failed
helloWorldQueue.clean(0, 'completed');
helloWorldQueue.clean(0, 'waiting');
helloWorldQueue.clean(0, 'active');
helloWorldQueue.clean(0, 'delayed');
helloWorldQueue.clean(0, 'failed');

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);