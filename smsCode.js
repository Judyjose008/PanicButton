/*
*******     Warning     *******   *******     Warning     *******   *******     Warning     *******   
This is only for development purpose.If you get a heart attack  still call 911.

*/


'use strict';

const AWS = require('aws-sdk');

const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
const ADULTCHILD = '0000000000 '; // Replace with your number with country code and no need of '+'

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);


if (event.clickType == "LONG")
{
    const payload = JSON.stringify(event);
    const params = {
        PhoneNumber: ADULTCHILD,
        Message: "HELP! I need Medical Attention immediately",// Change to your message
    };
    SNS.publish(params, callback);
        var aws = require('aws-sdk');
    var lambda = new aws.Lambda({
    region: 'us-east-1' //change to your region
    });
        //invokes a lambda function which calls the ifttt applet
        lambda.invoke({
          FunctionName: 'iotbutton_G030JF059346NHUH_iot-button-ifttt-maker-nodejs',//Change it to your lambda code to invoke
          Payload: JSON.stringify(event, null, 2) // pass params
        }, function(error, data) {
          if (error) {
            context.done('error', error);
          }
          if(data.Payload){
           context.succeed(data.Payload)
          }
        });
  }

  if (event.clickType == "SINGLE")
  {
    const payload = JSON.stringify(event);
    const params = {
      PhoneNumber: ADULTCHILD,
      Message: "Can you please come to my room.I need Help.", //change it your message
  };
    SNS.publish(params, callback);
  }

  if (event.clickType == "DOUBLE")
  {
    const payload = JSON.stringify(event);
    const params = {
      PhoneNumber: ADULTCHILD,
      Message: "I am not feeling very well",  // Change it your message
  };
    SNS.publish(params, callback);
  }

    // result will go to function callback
    


};


