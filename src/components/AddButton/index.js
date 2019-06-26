import React, { useState, useEffect } from "react";
//import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, Button, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import colors from "../../constants/colors";
import styles from "./styles";

export default function AddButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <View style={{ flex: 1, paddingBottom: 20, marginBottom: 80 }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          zIndex: 2,
          marginBottom: 50,
          backgroundColor: colors.secundaryText,
          borderRadius: 100
        }}
        onPress={() => toggleModal()}
      >
        <Icon
          name="plus"
          size={30}
          color={isModalVisible ? "white" : "black"}
        />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        //onSwipeComplete={() => this.setState({ visibleModal: null })}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.bottomModal}
      >
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Add expenses</Text>
          <TouchableOpacity style={styles.button} onPress={() => toggleModal()}>
          <Icon
          name="camera"
          size={30}
          color={colors.secundaryText}
        />  
            <Text style={styles.buttonText}>Add expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => toggleModal()}>
          <Icon
          name="edit"
          size={30}
          color={colors.secundaryText}
        />  
            <Text style={styles.buttonText}>Add expenses</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

//     return (<TouchableOpacity
//     style={{
//       borderWidth: 1,
//       borderColor: "rgba(0,0,0,0.2)",
//       alignItems: "center",
//       justifyContent: "center",
//       width: 56,
//       height: 56,
//       zIndex: 2,
//       marginBottom: 50,
//       backgroundColor: colors.secundaryText,
//       borderRadius: 100
//     }}
//   >
//     <Icon name="plus" size={30} color="black" />
//   </TouchableOpacity>
//)}

//export default AddButton;
