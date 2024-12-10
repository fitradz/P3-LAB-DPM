import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';  // Default Import
import AddTodoScreen from './src/screens/AddTodoScreen';  // Default Import

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setCurrentScreen('Home'); // Kembali ke layar utama setelah menambahkan To-Do
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Menghapus To-Do berdasarkan index
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen
          todos={todos}
          navigateToAdd={() => setCurrentScreen('AddTodo')}
          deleteTodo={deleteTodo}  // Menambahkan fungsi deleteTodo
        />
      ) : (
        <AddTodoScreen addTodo={addTodo} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
