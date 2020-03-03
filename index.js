// imports 
const httpRequest = require('./http');
const axios = require('axios').default;

// function to call all the servers and fetch the least priority server
function findServer(data) {
    return axios.all(data.map(httpRequest)).then(allResponses => {
        try {
            const server = allResponses.filter(server => server.online).sort((a, b) => a.priority - b.priority);
            if (server && server.length > 0) {
                return server[0];
            }
        }
        catch {
            throw new Error('No server is online');
        }
    });
}

// export findServer 
module.exports = findServer;
