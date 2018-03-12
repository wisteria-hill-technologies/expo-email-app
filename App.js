import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MailComposer, FileSystem } from 'expo'

export default class App extends React.Component {

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + `myattachments`).catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  writeHTML=()=>{
    FileSystem.writeAsStringAsync(`${FileSystem.documentDirectory}myattachments/myhtml`, "<html>Hello</html>").then(result=>{
      FileSystem.readAsStringAsync(`${FileSystem.documentDirectory}myattachments/myhtml`).then(result=>{
        console.log("readAsStringAsync response data>>>", result)
      })
      
    })
    
  }

  openEmail=()=>{
    MailComposer.composeAsync({
      recipient:"",
      subject:"attachment is not working",
      body:"Hi! Here is the attachment...",
      attachments: [`${FileSystem.documentDirectory}myattachments/myhtml`]
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
