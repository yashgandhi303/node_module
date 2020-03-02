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

 # Test the module
* On the command line, create a new test directory by the following command
* mkdir test-directory
* Switch to the new directory:
* cd /path/to/test-directory

In the test directory, install your module:

```bash
    npm install node-package-assignment
```

* In the test directory, create a test.js file which requires your module and calls your module as a method.

```bash
    const findServer = require('node-package-assignment');
```

```bash
    // import created module
    const findServer = require('node-package-assignment');
    // this is our example json
    const data = require('./mock.data');

    // use the module to fetch lowest priority server
    const test = findServer(data);

    // response
    test.then((res) => console.log(res));
```

* On the command line, run node test.js. The message sent to the console.log should appear something like this:

![Alt text](https://github.com/yashgandhi303/node_module/blob/master/Screenshot%2020-03-03%at%4.26.06%AM.png "Optional title")
