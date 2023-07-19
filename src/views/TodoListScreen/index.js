import React, { useState} from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

function TodoListScreen () {
  const [todoListData, setTodoListData] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleChangeText = (text) => {
  setTodoText(text);
  };

  const handleButtonPress = () => {
    if (todoText.trim().length > 0) {
      setTodoListData((value) => value.concat({ text: todoText}));
      setTodoText('');
    }
  };

  const handleRenderListItem = ({item}) => {
    return <Text>{item.text}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            placeholder="Escribe tu palabra"
            style={styles.textInput}
            placeholderTextColor="#c4c4c4"
            value={todoText}
            onChangeText={handleChangeText}
          />
          <Button title="Enter" onPress={handleButtonPress}/>
        </View>
        <View>
          <FlatList
            data={todoListData}
            renderItem={handleRenderListItem}
            keyExtractor={(item)=> item.text}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbfb',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 12,
    paddingLeft: 12,
  },
  textInput: {
    backgroundColor:'#f5f5f5',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
});
export default TodoListScreen;
