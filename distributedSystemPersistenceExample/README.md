# Distributed System Persistence Example

Now after looking at Distributed Jobs, let's consider persistence when a worker program goes down in the middle of a job. In this example, we confirm that Bull will persist a job when not complete.

## How to Run

To see it in action, open up 3 shell sessions and in one, run scheduler and in the other two run worker. While the jobs are being processed, there is a blocking 2-second delay in the middle of the job--beginning right after the Job # is printed to console. Terminate one of the workers in the middle of a job, and watch that a few jobs later the other worker will pick up the same job # and complete it.

**Terminal/Machine 1**

    $ node scheduler
    Added 8 jobs to `hello world distributed` queue [8 total].
    Added 7 jobs to `hello world distributed` queue [15 total].
    Added 5 jobs to `hello world distributed` queue [20 total].
    Added 8 jobs to `hello world distributed` queue [28 total].


**Terminal/Machine 2**

We will terminate this worker and see the other worker pick up the incomplete job.

    $ node worker
    ========
    JOB 1
    ========
    Distributed worker finished job # 1
    ========
    JOB 3
    ========
    Distributed worker finished job # 3
    ========
    JOB 4
    ========
    Distributed worker finished job # 4
    ========
    JOB 7
    ========
    ^C


Note: `^C` means I terminated the program with Control+C


**Terminal/Machine 3**

We terminated worker 1 in the middle of Job 7. We see here that a couple jobs later, this worker picked up Job 7, then continued.


    $ node worker
    ========
    JOB 0
    ========
    Distributed worker finished job # 0
    ========
    JOB 2
    ========
    Distributed worker finished job # 2
    ========
    JOB 5
    ========
    Distributed worker finished job # 5
    ========
    JOB 6
    ========
    Distributed worker finished job # 6
    ========
    JOB 8
    ========
    Distributed worker finished job # 8
    ========
    JOB 9
    ========
    Distributed worker finished job # 9
    ========
    JOB 7
    ========
    Distributed worker finished job # 7
    ========
    JOB 10
    ========
    Distributed worker finished job # 10

