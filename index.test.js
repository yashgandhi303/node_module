// imports
const axios = require('axios').default;
const httpRequest = require('./http.js');
const data = require('./mock.data');
const findServer = require("./index");

// fetches results from mock data for lowest priority server
test("fetches results from mock data", async () => {
    const testmockData = await axios.all(data.map(httpRequest)).then(allResponses => {
        return allResponses.filter(server => server.online).sort((a, b) => a.priority - b.priority);
    });
    const lowestPriorityServer = testmockData[0].priority;
    return findServer(data).then(response => {
        expect(response).toHaveProperty('url')
        expect(response).toHaveProperty('priority')
        expect(response).toHaveProperty('online')
        expect(response.online).toEqual(true)
        expect(response.priority).toEqual(lowestPriorityServer)
    });
});

// show error if no servers are online 
test("show error if no servers are online", async () => {
    let offlineServerArray = [];
    offlineServerArray.push(data[0], data[2]);
    return findServer(offlineServerArray).then(response => {
        expect(() => {
            throw new Error('No server is online');
        }).toThrow();
    })
});