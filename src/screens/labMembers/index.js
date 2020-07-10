import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const kanchan = require("../../../assets/contacts/kanchan.png");
const sanjib = require("../../../assets/contacts/sanjib.png");
const aroop = require("../../../assets/contacts/aroop.png");
const tamoghno = require("../../../assets/contacts/tamoghno.png");
const mainak = require("../../../assets/contacts/mainak.png");
const dibyendu = require("../../../assets/contacts/dibyendu.png");
const sudeshna = require("../../../assets/contacts/sudeshna.png");
const aditya = require("../../../assets/contacts/aditya1.png");
const rohan = require("../../../assets/contacts/rohan.png");
const utpal = require("../../../assets/contacts/utpal.png");
const benu = require("../../../assets/contacts/benu.png");
const gourav = require("../../../assets/contacts/gourav.png");
const joydeep = require("../../../assets/contacts/joydeep.png");
const tuhin = require("../../../assets/contacts/tuhin.png");
const shaon = require("../../../assets/contacts/shaon.png");
const ailab_avatar = require("../../../assets/contacts/ailab_avatar.jpg");
const suman = require("../../../assets/contacts/suman.png");
const meghnath = require("../../../assets/contacts/meghnath.png");
const ravi = require("../../../assets/contacts/ravi.png");
const amit = require("../../../assets/contacts/amit.png");

const datas = [
  {
    img: sudeshna,
    text: "Sudeshna Majumder",
    note: "Delivery Project Executive",
    time: "3:43 pm"
  },
  {
    img: shaon,
    text: "Shaon Majumder",
    note: "Senior Solution Architect",
    time: "3:43 pm"
  },
  {
    img: ailab_avatar,
    text: "Tanay Guha",
    note: "Project Manager - Application Support & Maintenance",
    time: "1:12 pm"
  },
  {
    img: mainak,
    text: "Mainak Mandal",
    note: "Application Architect Microsoft",
    time: "10:03 am"
  },
  {
    img: kanchan,
    text: "kanchan Dey",
    note: "Senior Application Developer",
    time: "5:47 am"
  },
  {
    img: dibyendu,
    text: "Dibyendu Saha",
    note: "Application Architect - EAI/Hybrid Integration/Microservices",
    time: "11:11 pm"
  },
  {
    img: aditya,
    text: "Aditya Sengupta",
    note: "Application Architect",
    time: "8:54 pm"
  },
  {
    img: ailab_avatar,
    text: "Anirnaya Aich",
    note: "Senior System Engineer",
    time: "8:54 pm"
  },
  {
    img: utpal,
    text: "Utpal Bhattacharya",
    note: "Application Architect, Java, Open Source",
    time: "8:54 pm"
  },
  {
    img: aroop,
    text: "Aroop Bhattacharya",
    note: "Advisory System Analyst - Websphere Commerce, J2EE",
    time: "8:54 pm"
  },
  {
    img: sanjib,
    text: "Sanjib Karmakar",
    note: "AI Lab - Mobility | Micro-Frontends | Blockchain",
    time: "8:54 pm"
  },
  {
    img: suman,
    text: "Suman Kundu",
    note: "Package Solution Consultant - Websphere Commerce",
    time: "8:54 pm"
  },
  {
    img: benu,
    text: "Benu Mohta",
    note: "Application Architect : Microservices",
    time: "8:54 pm"
  },
  {
    img: meghnath,
    text: "Meghnath Saha",
    note: "Managing Consultant | NextGen ADM",
    time: "8:54 pm"
  },
  {
    img: tamoghno,
    text: "Tamoghno Bhaumik",
    note: "Delivery Project Executive - Complex Programs, PMP®",
    time: "8:54 pm"
  },
  {
    img: tuhin,
    text: "Tuhin Mondal",
    note: "Application Developer",
    time: "8:54 pm"
  },
  {
    img: joydeep,
    text: "Joydeep Paul",
    note: "Advisory Consultant",
    time: "8:54 pm"
  },
  {
    img: gourav,
    text: "Gourav Chakraborty",
    note: "Application Developer",
    time: "8:54 pm"
  },
  {
    img: rohan,
    text: "Rohan Bagaria",
    note: "Application Developer",
    time: "8:54 pm"
  },
  {
    img: amit,
    text: "Amit Kumar",
    note: "Technical Solution Architect",
    time: "8:54 pm"
  },
  {
    img: ravi,
    text: "Ravi Guduru",
    note: "Project Manager, PMP®",
    time: "8:54 pm"
  }
];

class LabMembers extends Component {
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
            <Title>Lab Members</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('MemberProfile')}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default LabMembers;
