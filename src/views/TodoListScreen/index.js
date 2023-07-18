import React from 'react';
import { ScrollView, View, Button, TextInput, StyleSheet } from 'react-native';

function TodoListScreen () {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput placeholder='Escribe tu palabra' />
        <Button title='Enter'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  }
});
export default TodoListScreen;