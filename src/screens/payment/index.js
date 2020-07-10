import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator
} from "native-base";
import styles from "./styles";

const Item = Picker.Item;

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Money Trasfer</Title>
          </Body>
          <Right />
        </Header>
            

        <Content>
        <Text>
                  Lunch ka paisa dena vul gaye dost ko? No worries, send money securely with our payment page. 
                  {`\n`}
                  {`\n`}
                  Watch this space!
            </Text>
        </Content>
      </Container>
    );
  }
}

export default Payment;
