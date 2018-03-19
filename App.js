import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native'
import { MailComposer, FileSystem } from 'expo'

export default class App extends React.Component {

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.cacheDirectory + `myattachments`).catch(e => {
      console.log(e, 'Directory exists')
    })
  }

  writeHTML=()=>{
    FileSystem.writeAsStringAsync(`${FileSystem.cacheDirectory}myattachments/myhtml.html`, "<html><h1>Hello, World!</h1><p>Html attachment works with Expo's mail composer!</p></html>").then(result=>{
      FileSystem.readAsStringAsync(`${FileSystem.cacheDirectory}myattachments/myhtml.html`).then(result2=>{
        console.log("readAsStringAsync response data >>", result2)
      })
      
    })
    
  }

  openEmail=()=>{
    MailComposer.composeAsync({
      recipient:"",
      subject:"html attachment is working",
      body:"Hi! Here is the attachment...",
      attachments: [`${FileSystem.cacheDirectory}myattachments/myhtml.html`]
    })
  }

  openShare=()=>{
    Share.share({
      message: 'Can we share?',
      url: 'https://reactjs.org',
      title: 'We love React!'
    }, {
      // Android only:
      dialogTitle: 'Share dialog title...',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity
          style={{backgroundColor: "green", padding: 10, margin: 10}}
          onPress={this.writeHTML}
        >
          <Text>Write HTML</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: "purple", padding: 10, margin: 10}}
          onPress={this.openEmail}
        >
          <Text>Send Email with Attachment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: "blue", padding: 10, margin: 10}}
          onPress={this.openShare}
        >
          <Text>Share</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
