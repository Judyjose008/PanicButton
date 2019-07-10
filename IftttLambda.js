

'use strict';

const https = require('https');

//const makerKey = '{{g2neqbQ54kRSiiJ7JTmQeaD7xhgDOQKdiJ2NoRsT033}}'; // change it to your Maker key

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    // make sure you created a receipe for event <serialNumber>-<clickType>
    const makerEvent = `${event.serialNumber}-${event.clickType}`;
    const url = `https://maker.ifttt.com/trigger/{{makerEvent}}/with/key/{{eventKey}}`;//Replace with your Webhook key from Documentation.
    https.get(url, (res) => {
        let body = '';
        console.log(`STATUS: ${res.statusCode}`);
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Event has been sent to IFTTT Maker channel');
            callback(null, body);
        });
    }).on('error', (e) => {
        console.log('Failed to trigger Maker channel', e);
        callback(`Failed to trigger Maker channel: ${e.message}`);
    });
};



