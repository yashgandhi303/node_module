# node_module
a node module that determines the availability of a given list of servers
and then returns an available server with the lowest priority number.

![Alt text](https://github.com/yashgandhi303/node_module/blob/master/Screenshot%202020-03-03%20at%203.56.46%20AM.png "Optional title")

example json

```bash
[
    {
        "url": "http://doesNotExist.boldtech.co",
        "priority": 1
    },
    {
        "url": "http://boldtech.co",
        "priority": 7
    },
    {
        "url": "http://offline.boldtech.co",
        "priority": 2
    },
    {
        "url": "http://google.com",
        "priority": 4
    }
]
```