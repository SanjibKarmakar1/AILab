import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Radio,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class GroupNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false
    };
  }
  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false
    });
    this.props.navigation.navigate('NotificationContent');
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false
    });
    this.props.navigation.navigate('NotificationContent');
  }
  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false
    });
    this.props.navigation.navigate('NotificationContent');
  }
  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    });
    this.props.navigation.navigate('NotificationContent');
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Select Group</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem
            selected={this.state.radio1}
            onPress={() => this.toggleRadio1()}
          >
            <Left>
              <Text>Lunch Group</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio1}
                onPress={() => this.toggleRadio1()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Left>
              <Text>AIM Project Group</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio2}
                onPress={() => this.toggleRadio2()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio3}
            onPress={() => this.toggleRadio3()}
          >
            <Left>
              <Text>Horizon Group</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio3}
                onPress={() => this.toggleRadio3()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio4}
            onPress={() => this.toggleRadio4()}
          >
            <Left>
              <Text>My Cubical</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio4}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                onPress={() => this.toggleRadio4()}
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default GroupNotification;
