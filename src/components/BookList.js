import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  function handleAdd() {
    setBooks([...books, newBook]);
    setNewBook('');
  }

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={book => book}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      <TextInput
        testID="book-input"
        value={newBook}
        onChangeText={setNewBook}
      />

      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookList;
