// This is the publisher program

var Queue = require('bull');
var publisherQueue = Queue('hello world distributed', 6379, '127.0.0.1');
var jobCount = 0;
var jobsToMake, n;


// Make random number of jobs per iteration
setInterval(function(){

  jobsToMake = Math.round(Math.random() * 5 + 5); // between 5 - 10 jobs
  // Add jobs to the queue
  for(n = 0; n < jobsToMake; n++) {
    publisherQueue.add({index: jobCount++});
  }

  console.log('Added ' +jobsToMake+ ' jobs to `hello world distributed` queue.')

}, 2000)