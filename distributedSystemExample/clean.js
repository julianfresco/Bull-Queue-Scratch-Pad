// Clean the distributed jobs
var Queue = require('bull');
var listenerQueue = Queue('hello world distributed', 6379, '127.0.0.1');

listenerQueue.on('cleaned', function (job, type) {
  console.log('Cleaned %s %s jobs', job.length, type);
});

// Clean
// Options: completed, waiting, active, delayed, failed
listenerQueue.clean(0, 'completed');
listenerQueue.clean(0, 'waiting');
listenerQueue.clean(0, 'active');
listenerQueue.clean(0, 'delayed');
listenerQueue.clean(0, 'failed');

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);