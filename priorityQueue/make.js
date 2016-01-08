// PriorityQueue testing. All the queue will do is accept a number, and create that many jobs to process 'Hello World '+index

var PriorityQueue = require('bull/lib/priority-queue');
var opts = {"priority": "critical", "attempts": 4};
var jobsTotal = Math.round(Math.random() * 10 + 10); // between 10 - 20 jobs

var helloWorldQueue = PriorityQueue('hello world', 6379, '127.0.0.1');
var jobCount;

// Define how the queue is processed
helloWorldQueue.process(function(job, done){

  console.log('Hello World - '+ job.data.index);

  done();

})

// Add jobs to the queue
for(var n = 0; n < jobsTotal; n++) {
  helloWorldQueue.add({index: n}, opts);
  helloWorldQueue.pause();
}

console.log('Added ' +jobsTotal+ ' jobs to `hello world` priority queue.')

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);