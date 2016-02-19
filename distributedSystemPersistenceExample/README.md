# Distributed System Persistence Example

Now after looking at Distributed Jobs, let's consider persistence when a worker program goes down in the middle of a job. In this example, we confirm that Bull will persist a job when not complete.

## How to Run

To see it in action, open up 3 shell sessions and in one, run scheduler and in the other two run worker. While the jobs are being processed, there is a blocking 2-second delay in the middle of the job--beginning right after the Job # is printed to console. Terminate one of the workers in the middle of a job, and watch that a few jobs later the other worker will pick up the same job # and complete it.

**Terminal/Machine 1**

    $ node scheduler
    Added 9 jobs to `hello world distributed` queue [9 total].
    Added 8 jobs to `hello world distributed` queue [17 total].


**Terminal/Machine 2**

We will terminate this worker and see the other worker pick up the incomplete job.

    $ node worker
    ========
    JOB 0: Started...
    JOB 0: FINISHED.
    ========

    ========
    JOB 3: Started...
    JOB 3: FINISHED.
    ========

    ========
    JOB 4: Started...
    JOB 4: FINISHED.
    ========

    ========
    JOB 7: Started...
    ^C


Note: `^C` means I terminated the program with Control+C


**Terminal/Machine 3**

We terminated worker 1 in the middle of Job 7. We see here that a couple jobs later, this worker picked up Job 7, then continued.


    $ node worker
    ========
    JOB 1: Started...
    JOB 1: FINISHED.
    ========

    ========
    JOB 2: Started...
    JOB 2: FINISHED.
    ========

    ========
    JOB 5: Started...
    JOB 5: FINISHED.
    ========

    ========
    JOB 6: Started...
    JOB 6: FINISHED.
    ========

    ========
    JOB 8: Started...
    JOB 8: FINISHED.
    ========

    ========
    JOB 9: Started...
    JOB 9: FINISHED.
    ========

    ========
    JOB 7: Started...
    JOB 7: FINISHED.
    ========

    ========
    JOB 10: Started...
    JOB 10: FINISHED.
    ========

    ..etc..