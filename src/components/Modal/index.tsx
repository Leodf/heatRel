import React, { useState } from "react";
import { View, Modal, Text, Button } from "react-native";

const ModalComponent = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
