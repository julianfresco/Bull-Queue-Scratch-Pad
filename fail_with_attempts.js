var Queue = require('bull');
var helloWorldQueue = Queue('hello world', 6379, '127.0.0.1');

// Fail handler
helloWorldQueue.on('failed', function(job, err){
  // Job failed with reason err!
  console.log('Job with index ' +job.data.index+ ' failed with message:\n', err);
  console.log('Attempts made:\n', job.attemptsMade);
  console.log('Is last attempt?  => ', (job.attemptsMade === job.opts.attempts))
})

// Define how the queue is processed
helloWorldQueue.process(function(job, done){
  // Fail
  throw new Error('Throwing errors for testing...')
  done();
})

helloWorldQueue.add({index: 9001}, {attempts: 4});

setTimeout(function(){ 
  process.exit(200); // Done
}, 1000);