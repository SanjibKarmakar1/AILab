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
  Body,
  Item,
  Input
} from "native-base";
import styles from "./styles";

const pratik = require("../../../assets/contacts/amit.png");
const sanjib = require("../../../assets/contacts/sanjib.png");
const aroop = require("../../../assets/contacts/aroop.png");
const tamoghno = require("../../../assets/contacts/tamoghno.png");
const mainak = require("../../../assets/contacts/mainak.png");
const dibyendu = require("../../../assets/contacts/dibyendu.png");
const sudeshna = require("../../../assets/contacts/sudeshna.png");
const aditya = require("../../../assets/contacts/aditya.png");
const rohan = require("../../../assets/contacts/rohan.png");
const utpal = require("../../../assets/contacts/utpal.png");
const benu = require("../../../assets/contacts/benu.png");
const gourav = require("../../../assets/contacts/gourav.png");
const joydeep = require("../../../assets/contacts/joydeep.png");

const datas = [
  {
    img: sudeshna,
    text: "Sudeshna Majumder",
    note: "Delivery Project Executive",
    time: "3:43 pm"
  },
  {
    img: pratik,
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
    img: pratik,
    text: "Shaon Mazumder",
    note: "Senior Solution Architect",
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
    img: pratik,
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
    img: pratik,
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
    img: pratik,
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
    img: pratik,
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
  }
];

class IndividualLocation extends Component {
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
            <Title>Select The Legend</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
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
                  <Button transparent onPress={() => this.props.navigation.navigate('LocationContent')}>
                    <Text>Select</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default IndividualLocation;
