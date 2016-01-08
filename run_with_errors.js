var Queue = require('bull');
var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');

helloWorldQueue.on('failed', function(job, err){
  // Job failed with reason err!
  console.log('Job with index ' +job.data.index+ ' failed: ', err);
})

// Define how the queue is processed
helloWorldQueue.process(function(job, done){

  if(job.data.index % 2 === 0) {
    // Success
    console.log('Hello World - '+ job.data.index);
  }
  else {
    // Fail
    throw new Error('Throwing errors for testing...')
  }

  done();

})

helloWorldQueue.resume();

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);