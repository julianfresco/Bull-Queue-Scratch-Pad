// This is the worker program

var Queue = require('bull');
var sleep = require('sleep');
var workerQueue = Queue('hello world distributed', 6379, '127.0.0.1');

var mockLongProcess = function(s){
  sleep.usleep(s*1000000);
};

// Define how the queue is processed
workerQueue.process(function(job, done){

  console.log('========\nJOB '+ job.data.index +'\n========');
  mockLongProcess(2); // Sleep for 2 seconds
  console.log('Distributed worker finished job # '+ job.data.index);

  done();

})
