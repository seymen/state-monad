const State = require('fantasy-states');

const options = {
    domain: 'https://httpbin.org',
    someInt: 10
};

let http = {
    request: {
        headers: {
            Cache: 'no-cache'
        }
    },
    response: {
        body: ''
    }
};

const addRequestHeader = (name, value) => (http) => {
    http.request.headers[name] = value;
    return http;
};

const execute = (http) => {
    return State.get.map((options) => {
        http.response.body = 'EXEC ' + options.domain;
        return http;
    });
}

const result = State.of(http)
                .map(addRequestHeader('Content-Type', 'application/json'))
                .map(addRequestHeader('Accept', 'application/json'))
                .chain(execute)
                .run(options);

console.log(JSON.stringify(result, null, 2));
