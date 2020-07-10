

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  ListItem,
  Separator
} from "native-base";
import styles from "./styles";

export default class Survey extends Component {

  /* openSurvey() {
    
  } */

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
            <Title>Lab Survey</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>

            <Content>
              <Separator bordered>
                <Text>Pending Surveys</Text>
              </Separator>

              <ListItem onPress={() => this.props.navigation.navigate('TakeSurvey')}>
                <Body>
                  <Text>
                    Work From Home Policy
              </Text>
                  <Text numberOfLines={2} note>
                    By Tanay Guha
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Last Date: 12/02/21
              </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem onPress={() => this.props.navigation.navigate('TakeSurvey')}>
                <Body>
                  <Text>
                    Microservice Interview Tips
              </Text>
                  <Text numberOfLines={2} note>
                    By Benu Mohta
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Last Date: 10/02/21
              </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('TakeSurvey')}>
                <Body>
                  <Text>
                    Laptop Heat Up
              </Text>
                  <Text numberOfLines={2} note>
                    By Tanay Guha
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Last Date: 04/12/20
              </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('TakeSurvey')}>
                <Body>
                  <Text>
                    Docker
              </Text>
                  <Text numberOfLines={2} note>
                    By Aditya Sengupta
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Last Date: 12/02/21
              </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('TakeSurvey')}>
                <Body>
                  <Text>
                    Take Home Salary
              </Text>
                  <Text numberOfLines={2} note>
                    By Shaon
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Last Date: 12/02/21
              </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator bordered>
                <Text>Completed Surveys</Text>
              </Separator>
              <ListItem>
                <Body>
                  <Text>
                    How are you doing?
              </Text>
                  <Text numberOfLines={2} note>
                    By Amit Kumar
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                  Taken On: 12/02/21
              </Text>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>
                    Team Lunch
              </Text>
                  <Text numberOfLines={2} note>
                    By Anirnaya Aaich
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                  Taken On: 12/02/21
              </Text>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>
                   Howdy Lab 
              </Text>
                  <Text numberOfLines={2} note>
                    By Ravi
              </Text>
                </Body>
                <Right>
                  <Text numberOfLines={3} note>
                    Taken On: 12/02/21
              </Text>
                </Right>
              </ListItem>
            </Content>



          </View>
        </Content>
      </Container>
    );
  }
}
