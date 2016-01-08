# Bull Queue Scratch Pad

-----

Test how simple features of the [Bull Queue](https://github.com/OptimalBits/bull) for Node and Redis

### How to Use

Before running, download the repo, install the bull package, and run redis:

    npm install
    redis-server

To run any of the programs, simply execute the file via node

    node make
    node count


Example Output:


    $ node make
    Added 15 jobs to `hello world` queue.
    
    $ node count
    Queue count:  15
    
    $ node run
    Hello World - 0
    Hello World - 1
    Hello World - 2
    Hello World - 3
    Hello World - 4
    Hello World - 5
    Hello World - 6
    Hello World - 7
    Hello World - 8
    Hello World - 9
    Hello World - 10
    Hello World - 11
    Hello World - 12
    Hello World - 13
    Hello World - 14
    
    $ node make
    Added 16 jobs to `hello world` queue.
    
    $ node count
    Queue count:  16
    
    $ node run_with_errors
    Hello World - 0
    Job with index 1 failed:  [Error: Throwing errors for testing...]
    Hello World - 2
    Job with index 3 failed:  [Error: Throwing errors for testing...]
    Hello World - 4
    Job with index 5 failed:  [Error: Throwing errors for testing...]
    Hello World - 6
    Job with index 7 failed:  [Error: Throwing errors for testing...]
    Hello World - 8
    Job with index 9 failed:  [Error: Throwing errors for testing...]
    Hello World - 10
    Job with index 11 failed:  [Error: Throwing errors for testing...]
    Hello World - 12
    Job with index 13 failed:  [Error: Throwing errors for testing...]
    Hello World - 14
    Job with index 15 failed:  [Error: Throwing errors for testing...]
    
    $ node clean
    Cleaned 0 waiting jobs
    Cleaned 0 active jobs
    Cleaned 0 delayed jobs
    Cleaned 8 failed jobs
    Cleaned 60 completed jobs
    