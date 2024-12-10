import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';   // Default Import

const AddTodoScreen = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    console.log('AddTodoScreen Mounted');
    return () => {
      console.log('AddTodoScreen Unmounted');
    };
  }, []);

  const handleAdd = () => {
    if (todo.trim() !== '') {
      addTodo(todo);  // Fungsi untuk menambah To-Do
      setTodo('');     // Reset input setelah menambah To-Do
    } else {
      alert('Masukkan To-Do terlebih dahulu!');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Tambah Isinya" />
      <TextInput
        style={styles.input}
        placeholder="Masukkan Isi Yang baru"
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Tambahkanlah sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTodoScreen;
