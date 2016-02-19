# Distributed System Example

Suppose you want one program to add jobs, and one or many other programs to listen and process the work. This is very easy with Bull!

## How to Run

To see it in action, open up 2 shell sessions and in one, run scheduler and in the other run worker. These sessions can be from different machines--you will need to update the redis host IP so they point to the same redis instance.

**Terminal/Machine 1**

    $ node scheduler
    Added 9 jobs to `hello world distributed` queue.
    Added 5 jobs to `hello world distributed` queue.
    Added 7 jobs to `hello world distributed` queue.
    Added 8 jobs to `hello world distributed` queue.
    Added 5 jobs to `hello world distributed` queue.


**Terminal/Machine 2**

    $ node worker
    Hello World from distributed worker - 0
    Hello World from distributed worker - 1
    Hello World from distributed worker - 2
    Hello World from distributed worker - 3
    Hello World from distributed worker - 4
    Hello World from distributed worker - 5
    Hello World from distributed worker - 6
    Hello World from distributed worker - 7
    Hello World from distributed worker - 8
    Hello World from distributed worker - 9
    Hello World from distributed worker - 10
    Hello World from distributed worker - 11
    Hello World from distributed worker - 12
    Hello World from distributed worker - 13
    Hello World from distributed worker - 14
    Hello World from distributed worker - 15
    ...etc
