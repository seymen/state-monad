const State = require('fantasy-states');

const options = {
    domain: 'https://httpbin.org',
    variableChar: '`',
};

const request = {
    headers: {
        Cache: 'no-cache'
    }
}

const setHeader = (name, value) => {
    console.log('setting request header');

    return (request) => {
        return State.get.map((options) => {
            console.log('domain is: ' + options.domain);

            request.headers[name] = value;
            return request;
        });
    };
};

// const execute = () => {
//     return State.modify((res)
//     return State.get.map((http) => {
//         http.response.body = 'executed';
//         return http;
//     });
// };

const r = State.of(request)
            .chain(setHeader('a','a'));

console.log('running...');
const y = r.run(options);

console.log(y);

var append = (greeting) => {
    return State.get.map((person) => {
        return greeting + ' ' + person;
    });
}

const x = State.of('hello')
            // .chain(append)
            .run('Ozan')
            // .evalState('Ozan');

// console.log(x);
