import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3,H2, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/lab1.jpg");
const launchscreenLogo = require("../../../assets/contacts/ailab_avatar.jpg");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer} >
          {/* <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View> */}
          <View
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
              marginTop: 14
            }}
          >
            <H2 style={styles.text}>Aplication Innovation Lab</H2>
            {/* <View style={{ marginTop: 8 }} /> */}
            <H3 style={styles.text}>Internal Use Only</H3>
            <H3 style={styles.text}>We prefer transparency at work</H3>
            <Button transparent dark onPress={() => this.props.navigation.openDrawer()}>
              <Text>Lets Go!</Text>
            </Button>
            {/* <View style={{ marginTop: 8 }} /> */}
          </View>
          {/* <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Text>Lets Go!</Text>
            </Button>
          </View> */}
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
