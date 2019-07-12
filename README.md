# PanicButton
PANIC Button using AWS IoT button and IFTTT which can trigger and make a call (Node js Version).

# Requirements Needed 
    1. AWS IoT Button
    2. AWS account
    3. IFTTT account
    4. Android mobile phone
    
# Register your AWS IoT Button using App
   *This application is not available in india, So if you need this you should download it from the internet as sdk(for       
     indians only)
   ### Download and Install AWS button dev app 
   
   You can manually also register the button but through the app seems more easy.
           
           1. Download the App AWS IoT button Dev app from the Play Store.
           
           2. Register your Device by following the steps in the App itself.
            
           3. The serial number will be given in the backside of the device 
              starting with G030 use that for registering.
              
           4. Connect to the wifi by pressing the button for 6 seconds
              (There should be a wifi or hotspot nearby)
           
           5. Connect the Iot button using the Mobile app to the wifi.
           
           6. Now we will get the Picture of iot button.
           
           7. Cliking on the button will give three option
                    1. Choose Wifi.
                    
                    2. Create Lambda function.
                        You can create diffrent lambda from the given list to support the development
                        It will automatically create the rules and policies for the Lambda Functions
                        
                    3. Delete this device.
        
# Create Two Lambda Functions From App

        You need Two lambda Function to make this button
        Select the two lamdbda Functions named below from the list in Application.
            1.  iotbutton_G030JF059346NHUH_iot-button-sms-nodejs
            2.  iotbutton_G030JF059346NHUH_iot-button-ifttt-maker-nodejs
   
   ### Now Using a System.
         1) Replace 1st one with smsCode.js and 2nd one with iftttLambda.js
         
         *** Select the same region in your mobile App for your AWS location ***
# Create an IFTTT account
        
        1. Create an IFTTT account 
        
        2. You Can create an Applet by clicking the new applet.
        
        3. Choose Webhooks for the "THIS" part(Search Webhooks after clicking this).
        
        4. Choose International calls for "That part".
           ( You can choose any applets instead of this).
           
        6. Go to the link Webhooks given above  and got to Documentation.
        
        7. Copy the URL from Documentaion by and edit your maker event to yours.
        
        8. Use this in your IFTTTLambda.js to edit.
        
# Adding the right policies

        Here We are invoking the iotbutton_G030JF059346NHUH_iot-button-ifttt-maker-nodejs from 
        iotbutton_G030JF059346NHUH_iot-button-sms-nodejs.
        
        So we have to add the right policies to iotbutton_G030JF059346NHUH_iot-button-sms-nodejs.
        
        1. Go to the IAM console in AWS
        2. Go to ROLES section
        3. Choose the role iotbutton_G030JF059346NHUH_iot-button-sms-nodejs.
        4. Add the policy AWSLambdaRole
                AWSLambdaRole will enable the lambda function with power to
                invoke other lambda function

# Test your device
         Now you can test your device by connecting to a wifi or
         using the test option in your AWS console.

