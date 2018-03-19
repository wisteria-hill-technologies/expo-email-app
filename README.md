# Issue: Expo MailComposer - Email attachment is not working. 

This is a demo app to demonstrate my issue.
1. Press "write HTML" - asyncStorage is used to save a file.
2. Press "Open Email" - email client opens but attachment fails.

Tested with Android device with Expo.

## Solution:
Use FileSystem.cacheDirectory instead of FileSystem.documentDirectory (Please see the App.js)

Please follow the discussion at expo forum below:
https://forums.expo.io/t/mailcomposer-attachments-not-working-android/7771/10?u=nfabacus

Published here:
https://expo.io/@nfabacus/expo-email-app



This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).