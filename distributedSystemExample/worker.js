// This is the worker program

var Queue = require('bull');
var workerQueue = Queue('hello world distributed', 6379, '127.0.0.1');

// Define how the queue is processed
workerQueue.process(function(job, done){

  console.log('Hello World from distributed worker - '+ job.data.index);

  done();

})
