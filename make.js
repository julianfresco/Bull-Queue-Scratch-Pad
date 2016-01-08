// Queue testing. All the queue will do is accept a number, and create that many jobs to process 'Hello World '+index

var Queue = require('bull');
var jobsTotal = Math.round(Math.random() * 10 + 10); // between 10 - 20 jobs

var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');
var jobCount;

// Define how the queue is processed
helloWorldQueue.process(function(job, done){

  console.log('Hello World - '+ job.data.index);

  done();

})

// Add jobs to the queue
for(var n = 0; n < jobsTotal; n++) {
  helloWorldQueue.add({index: n});
  helloWorldQueue.pause();
}

console.log('Added ' +jobsTotal+ ' jobs to `hello world` queue.')

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);