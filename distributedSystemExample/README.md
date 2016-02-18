# Distributed System Example

Suppose you want one program to add jobs, and one or many other programs to listen and process the work. This is very easy with Bull!

## How to Run

To see it in action, open up 2 shell sessions and in one, run publisher and in the other run listener.

**Terminal 1**

    $ node publisher
    Added 9 jobs to `hello world distributed` queue.
    Added 5 jobs to `hello world distributed` queue.
    Added 7 jobs to `hello world distributed` queue.
    Added 8 jobs to `hello world distributed` queue.
    Added 5 jobs to `hello world distributed` queue.


**Terminal 2**

    $ node listener
    Hello World from distributed listener - 0
    Hello World from distributed listener - 1
    Hello World from distributed listener - 2
    Hello World from distributed listener - 3
    Hello World from distributed listener - 4
    Hello World from distributed listener - 5
    Hello World from distributed listener - 6
    Hello World from distributed listener - 7
    Hello World from distributed listener - 8
    Hello World from distributed listener - 9
    Hello World from distributed listener - 10
    Hello World from distributed listener - 11
    Hello World from distributed listener - 12
    Hello World from distributed listener - 13
    Hello World from distributed listener - 14
    Hello World from distributed listener - 15
    ...etc
