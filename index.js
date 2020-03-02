// imports 
const axios = require('axios').default;

// function to process all GET Requests
function httpGet(data, callback) {
    return axios.get(data.url, { timeout: 5000 })
        .then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                return { ...data, online: true };
            }
        })
        .catch((err) => {
            return { online: false, ...data };
        });
}

// function to call all the servers and fetch the least priority server
function findServer(data) {
    return axios.all(data.map(httpGet)).then(allResponses => {
        const server = allResponses.filter(server => server.online).sort((a, b) => a.priority - b.priority);
        if (server && server.length > 0) {
            return server[0];
        }
        throw new Error('No server is online');
    });
}

// export findServer 
module.exports = findServer;
