// This is the scheduler program

var Queue = require('bull');
var schedulerQueue = Queue('hello world distributed', 6379, '127.0.0.1');
var jobCount = 0;
var jobsToMake, n;


// Make random number of jobs per iteration
setInterval(function(){

  jobsToMake = Math.round(Math.random() * 500 + 500); // between 500 - 1000 jobs
  // Add jobs to the queue
  for(n = 0; n < jobsToMake; n++) {
    schedulerQueue.add({index: jobCount++});
  }

  console.log('Added ' +jobsToMake+ ' jobs to `hello world distributed` queue.')

}, 2000)