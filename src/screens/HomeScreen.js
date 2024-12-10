import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';  // Default Import
import TodoItem from '../components/TodoItem';  // Default Import

const HomeScreen = ({ todos, navigateToAdd, deleteTodo }) => {
  useEffect(() => {
    console.log('HomeScreen Mounted');
    return () => {
      console.log('HomeScreen Unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Apa Mau Isi" />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoContainer}>
            <TodoItem title={item} />
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(index)}>
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada Isinya Ini</Text>}
      />
      <Button title="Tambahlah Isinya Disini" onPress={navigateToAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default HomeScreen;
