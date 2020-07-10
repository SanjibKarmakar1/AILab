import React, { Component } from "react";
import { View,Image, Alert } from "react-native";

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
  Item,
  Label,
  Input,
  Form,
  Card,
  CardItem,
  IconNB,
  Textarea,
  Picker,
  Thumbnail
} from "native-base";
import ImagePicker from "react-native-image-picker";

import styles from "./styles";
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/contacts/ailab_avatar.jpg");

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedImage: null
    };
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  send() {
    this.setState({ defaultAnimationDialog: false });
    Alert.alert(
      'Success!',
      'Your profile has been saved! No Worries, you will get to see ur profile only when integrated with backend' ,
      [
        { text: 'Ok', onPress: () => console.log('Yup Pressed!') },
      ],
      { cancelable: true }
    )
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
        // console.log("image data", { uri: 'data:image/jpeg;base64,' + res.data } ); //send this to API
        // console.log("image data", this.state.pickedImage);
        // { uri: 'data:image/jpeg;base64,' + response.data }
      }
    });
  }

  resetHandler = () =>{
    this.reset();
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
            <Title>My Profile</Title>
          </Body>
          <Right />
        </Header>

        <Content>

          <Form>
            <Card style={styles.mb}>
              <CardItem>
                <Left>
                  <Thumbnail source={logo} />
                  <Body>
                    <Text>AI Lab</Text>
                    <Text note>Profile</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardItem cardBody>
                <Image
                  style={{
                    resizeMode: "cover",
                    width: null,
                    height: 200,
                    flex: 1
                  }}
                  source={this.state.pickedImage ? this.state.pickedImage : cardImage}
                />
              </CardItem>
              <CardItem style={{ paddingVertical: 0 }}>
                <Left>
                  <Button transparent onPress={this.pickImageHandler}>
                    <Icon active name="image" />
                    <Text>Change Photo</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent onPress={this.resetHandler}>
                    <Icon active name="trash" />
                    <Text>Delete Photo</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>Last updated 11 days ago</Text>
                </Right>
              </CardItem>
            </Card>



            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input value="Sanjib Karmakar" />
            </Item>

            <Item floatingLabel>
              <Label>Job Title</Label>
              <Input value="UI Lead" />
            </Item>

            <Item stackedLabel>
              <Label>About Myself</Label>
              <Textarea rowSpan={7} value="Hybrid Mobile Application | Flutter | React Native | PhoneGap-Cordova | React | Vue | Angular | Node | Express | Knockout | Blockchain | Docker | IONIC | TypeScript | OOJS | ES6 | Underscore | Require |  VisualForce | Grunt | Jasmine-Karma | Material | Bootstrap-Zurb-Kendo | Ant Design | Redux | MEAN | MEVN | MongoDB" />
            </Item>

            <Item floatingLabel>
              <Label>Phone Mumber</Label>
              <Input value="9739740980" />
            </Item>

            <Item floatingLabel>
              <Label>Emergency Contact</Label>
              <Input value="9739740988" />
            </Item>

            <Item floatingLabel disabled>
              <Label>IBM Mail</Label>
              <Input disabled value="sankarm1@in.ibm.com" />
            </Item>

            <Item floatingLabel>
              <Label>Other Mail</Label>
              <Input value="sanjibkarmakar.it@gmail.com" />
            </Item>

            <Item floatingLabel>
              <Label>Slack</Label>
              <Input value=" @sankarm1" />
            </Item>

            <Item floatingLabel>
              <Label>People Manager</Label>
              <Input value="Tanay Guha" />
            </Item>

            <Item floatingLabel>
              <Label>Working Location</Label>
              <Input value="Tower C, DLF, Rajarhat, Kolkata, WB" />
            </Item>

            <Item floatingLabel>
              <Label>Current Account(s)</Label>
              <Input value="Horizon" />
            </Item>

            <Item floatingLabel>
              <Label>Current Project(s)</Label>
              <Input value="Care Radius, AIM, ARL, PST, Big, WriteOff" />
            </Item>

            <Item floatingLabel>
              <Label>Preferred Address</Label>
              <Input value="DLF IT PARK, PLOT NO. 59.0 M ARTERIAL RD OF NEW TOWN (RAJARHAT)" />
            </Item>

            <Item floatingLabel>
              <Label>Facebook Profile Link</Label>
              <Input value="https://www.facebook.com/actualSiteLink/" />
            </Item>

            <Item floatingLabel>
              <Label>Twitter Profile Link</Label>
              <Input value="https://www.twitter.com/actualSiteLink/" />
            </Item>

            <Item floatingLabel>
              <Label>Linkedin Profile Link</Label>
              <Input value="https://www.linkedin.com/actualSiteLink/" />
            </Item>

            <Item floatingLabel>
              <Label>Blog Link</Label>
              <Input value="https://www.blog.com/actualSiteLink/" />
            </Item>



          </Form>
          <Button full style={{ marginTop: 50 }} onPress={() => this.send()}>
            <Text>Save Changes</Text>
          </Button>

        </Content>

      </Container>
    );
  }
}

export default MyProfile;
