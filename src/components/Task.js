// components/Task.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {  
    props.onEdit(props.index, editedText);
    setIsEditing(false);
  }

  const handleDelete = () => {
    props.onDelete(props.index);
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        {isEditing ? (
          <TextInput
            style={styles.itemText}
            value={editedText}
            onChangeText={(text) => setEditedText(text)}
            onBlur={handleSave}
          />
        ) : (
          <Text style={styles.itemText}>{props.text}</Text>
        )}
      </View>
      <View style={styles.buttons}>
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.updateButton}>Update</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#4CAF50',
    marginRight: 10,
  },
  updateButton: {
    color: '#2196F3',
    marginRight: 10,
  },
  deleteButton: {
    color: '#FF0000',
  },
});

export default Task;
