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

class ShareDocument extends Component {
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
            <Title>Share It </Title>
          </Body>
          <Right />
        </Header>
            

        <Content>
        <Text>
                  Under Construction
                  {`\n`}
                  {`\n`}
                  Watch this space!
            </Text>
        </Content>
      </Container>
    );
  }
}

export default ShareDocument;
