> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

How to start the React Native App:
First, you will need to install the Expo Go in your Phone Application.
In your Visual Studio Code, you will need to install all the extensions in the package.json File here.
A node_modules folder will be created upon Successful Installation of the package.json file.
To start up the React Native Application, you will need to run the Following Command:
npx expo start
This will show the QR Code that will allowed you to scan and Open the App on your Phone Device.

For more information on starting your React Native App:
Visit this Website for More Information:
https://reactnative.dev/docs/environment-setup
