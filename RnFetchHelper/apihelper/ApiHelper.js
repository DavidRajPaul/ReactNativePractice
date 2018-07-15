import { NetInfo } from 'react-native';

/**
 * Check for Network Connection
 */
async function isNetAvailable() {
    let res = await NetInfo.getConnectionInfo();
    if (res == 'none') {
        console.log("No Network");
        return false;
    } else {
        console.log("Network Available");
        return true;
    }
}

/**
 * Calls the fetch API with the URL
 * 
 * @param {Sting} hostname 
 * @param {Sting} endpoint 
 */
function callAPI(hostname, endpoint = '/71a13054c1696a834c5bbb7570e68ece/raw/1a9958d684c7f098d2441f86bf9d04b242249cd7/samplejson.json') {
    var endpoint = hostname + endpoint;
    return {
        get: function (cb_fun) {
            isNetAvailable().then((isConnected) => {
                if (isConnected) {
                    fetch(endpoint, {
                        method: 'GET', // Request Method
                    })
                        .then(statusCheck)
                        .then(toJSON)
                        .then((json) => {
                            cb_fun(undefined, json);
                        })
                        .catch((error) => {
                            cb_fun(error, undefined)
                        });
                } else {
                    //No Internet
                }
            })

        }
    }
}

/**
 * HTTP Response Handling
 * 
 * @param {Object} response 
 */
function statusCheck(response) {

    // Success
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    // Failure - pass response for client handling and error reporting
    var errorMsg = 'Service call failed: ' + response.url;
    var error = new Error(errorMsg);
    error.response = response;
    throw error;
}

/**
 * Error Aware CallBack Wrapper
 * 
 * @param {String} resp 
 */
function callbackResponse(next) {
    return function (err, data) {
        if (typeof err !== 'undefined') {
            console.error(err, err.response);
        }
        next(data)
    };
}


/**
 * Converts response to JSON
 * 
 * @param {Object} response 
 */
function toJSON(response) {
    return response.json()
}

/**
 * Handles the request by getting the host name and gives the response using the callback function
 *
 * @param {String} hostname 
 */
export function ApiHandler(hostname) {

    if (typeof hostname === 'undefined') {
        console.warn("api: hostname undefined, falling back to relative url support");
        hostname = '';
    }

    return {
        request: callAPI(hostname),
        response: callbackResponse
    }
}