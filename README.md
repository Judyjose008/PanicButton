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
            1. iotbutton_G030JF059346NHUH_iot-button-ifttt-maker-nodejs
            2. iotbutton_G030JF059346NHUH_iot-button-sms-nodejs
# Create an IFTTT account

# Adding the right policies

# Test your device


