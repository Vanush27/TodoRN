import React from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import {useStyles} from './DeletePopup.useStyles';

interface IDeletePopup {
  visible: boolean;
  onDelete: any;
  onCancel: any;
}
const DeletePopup = ({visible, onDelete, onCancel}: IDeletePopup) => {
  const {styles} = useStyles();
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onCancel}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.headerTitle}>
            Are you sure you want to delete this todo?
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={onDelete} style={styles.delete}>
              <Text style={styles.deleteText}> Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onCancel} style={styles.onCancel}>
              <Text style={styles.deleteText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeletePopup;
