import React, { Component } from "react";
import { Image, Dimensions, Linking } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
// const logo = require("../../../assets/logo.png");
const sanjib = require("../../../assets/contacts/ailab_avatar.jpg");
const cardImage = require("../../../assets/contacts/sanjib_big.png");

class MemberProfile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('LabMembers')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Sanjib's Profile</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={sanjib} />
                <Body>
                  <Text>Sanjib karmakar</Text>
                  <Text note>Mobility | Blockchain | MicroFrontend</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                Hybrid Mobile Application | Flutter | React Native | PhoneGap-Cordova | React | Vue | Angular | Node | Express | Knockout | Blockchain | Docker | IONIC | TypeScript | OOJS | ES6 | Underscore | Require |  VisualForce | Grunt | Jasmine-Karma | Material | Bootstrap-Zurb-Kendo | Ant Design | Redux | MEAN | MEVN | MongoDB
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="chatboxes"
                  style={{ color: "#007BB6" }}
                />
                <Text>sankarm1</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="mail"
                  style={{ color: "#007BB6" }}
                />
                <Text>sankarm1@in.ibm.com</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="paper"
                  style={{ color: "#007BB6" }}
                />
                <Text>Horizon BCBS</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="person"
                  style={{ color: "#007BB6" }}
                />
                <Text>Tanay Guha</Text>
              </Left>
            </CardItem>
            <CardItem header bordered>
              <Text>Follow Sanjib on social platforms</Text>
            </CardItem>
            <CardItem >
              <Left>
                <Icon
                  active
                  name="logo-linkedin"
                  style={{ color: "#007BB6" }} onPress={() => Linking.openURL('https://in.linkedin.com/in/sanjib-karmakar-27605144')}
                />
                <Text onPress={() => Linking.openURL('https://in.linkedin.com/in/sanjib-karmakar-27605144')}>LinkedIn</Text>
              </Left>
              <Right>
                <Icon onPress={() => Linking.openURL('https://in.linkedin.com/in/sanjib-karmakar-27605144')} name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-facebook"
                  style={{ color: "#3B579D" }}
                />
                <Text onPress={() => Linking.openURL('https://twitter.com/lordpintai?lang=en')}>facebook</Text>
              </Left>
              <Right>
                <Icon onPress={() => Linking.openURL('https://twitter.com/lordpintai?lang=en')} name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon onPress={() => Linking.openURL('https://twitter.com/lordpintai?lang=en')} active name="logo-twitter" style={{ color: "#55ACEE" }} />
                <Text onPress={() => Linking.openURL('https://twitter.com/lordpintai?lang=en')}>Twitter</Text>
              </Left>
              <Right>
                <Icon onPress={() => Linking.openURL('https://twitter.com/lordpintai?lang=en')} name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default MemberProfile;
