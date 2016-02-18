// This is the listener program

var Queue = require('bull');
var listenerQueue = Queue('hello world distributed', 6379, '127.0.0.1');

// Define how the queue is processed
listenerQueue.process(function(job, done){

  console.log('Hello World from distributed listener - '+ job.data.index);

  done();

})
