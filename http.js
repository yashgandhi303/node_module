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

// export findServer 
module.exports = httpGet;
