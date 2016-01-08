var PriorityQueue = require('bull/lib/priority-queue');
var opts = {"priority": "critical", "attempts": 4};
var helloWorldQueue = PriorityQueue('hello world', 6379, '127.0.0.1');

// Define how the queue is processed
helloWorldQueue.process(function(job, done){

  console.log('Hello World - '+ job.data.index);

  done();

})


helloWorldQueue.resume();

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);