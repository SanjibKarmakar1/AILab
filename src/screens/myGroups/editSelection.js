import React, { Component } from "react";
import {
  Alert
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  ListItem,
  List,
  Input,
  Item,
  Thumbnail,
  CheckBox,
  Label,
  Form
} from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
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

class EditGroup extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      datas : [
        {
          id: 1,
          img: sudeshna,
          text: "Sudeshna Majumder",
          note: "Delivery Project Executive",
          time: "3:43 pm"
        },
        {
          id: 2,
          img: ailab_avatar,
          text: "Tanay Guha",
          note: "Project Manager - Application Support & Maintenance",
          time: "1:12 pm"
        },
        {
          id: 3,
          img: mainak,
          text: "Mainak Mandal",
          note: "Application Architect Microsoft",
          time: "10:03 am"
        },
        {
          id: 4,
          img: shaon,
          text: "Shaon Mazumder",
          note: "Senior Solution Architect",
          time: "5:47 am"
        },
        {
          id: 5,
          img: dibyendu,
          text: "Dibyendu Saha",
          note: "Application Architect - EAI/Hybrid Integration/Microservices",
          time: "11:11 pm"
        },
        {
          id: 6,
          img: aditya,
          text: "Aditya Sengupta",
          note: "Application Architect",
          time: "8:54 pm"
        },
        {
          id: 7,
          img: ailab_avatar,
          text: "Anirnaya Aich",
          note: "Senior System Engineer",
          time: "8:54 pm"
        },
        {
          id: 8,
          img: utpal,
          text: "Utpal Bhattacharya",
          note: "Application Architect, Java, Open Source",
          time: "8:54 pm"
        },
        {
          id: 9,
          img: aroop,
          text: "Aroop Bhattacharya",
          note: "Advisory System Analyst - Websphere Commerce, J2EE",
          time: "8:54 pm"
        },
        {
          id: 10,
          img: sanjib,
          text: "Sanjib Karmakar",
          note: "AI Lab - Mobility | Micro-Frontends | Blockchain",
          time: "8:54 pm"
        },
        {
          id: 11,
          img: suman,
          text: "Suman Kundu",
          note: "Package Solution Consultant - Websphere Commerce",
          time: "8:54 pm"
        },
        {
          id: 12,
          img: benu,
          text: "Benu Mohta",
          note: "Application Architect : Microservices",
          time: "8:54 pm"
        },
        {
          id: 13,
          img: meghnath,
          text: "Meghnath Saha",
          note: "Managing Consultant | NextGen ADM",
          time: "8:54 pm"
        },
        {
          id: 14,
          img: tamoghno,
          text: "Tamoghno Bhaumik",
          note: "Delivery Project Executive - Complex Programs, PMP®",
          time: "8:54 pm"
        },
        {
          id: 15,
          img: tuhin,
          text: "Tuhin Mondal",
          note: "Application Developer",
          time: "8:54 pm"
        },
        {
          id: 16,
          img: joydeep,
          text: "Joydeep Paul",
          note: "Advisory Consultant",
          time: "8:54 pm"
        },
        {
          id: 17,
          img: gourav,
          text: "Gourav Chakraborty",
          note: "Application Developer",
          time: "8:54 pm"
        },
        {
          id: 18,
          img: rohan,
          text: "Rohan Bagaria",
          note: "Application Developer",
          time: "8:54 pm"
        },
        {
          id: 19,
          img: amit,
          text: "Amit Kumar",
          note: "Technical Solution Architect",
          time: "8:54 pm"
        },
        {
          id: 20,
          img: ravi,
          text: "Ravi Guduru",
          note: "Project Manager, PMP®",
          time: "8:54 pm"
        }
      ],
      contacts: [],
      selectedChecklist: [2, 5, 6]
    };
  }

  onCheckBoxPress(id) {
    let tmp = this.state.selectedChecklist;

    if ( tmp.includes( id ) ) {
      tmp.splice( tmp.indexOf(id), 1 );
    } else {
      tmp.push( id );
    }
    // console.log('tmp--->', tmp);
    this.setState({
      selectedChecklist: tmp
    });
    // console.log('state after click--->', this.state.selectedChecklist);
  }
  sendInvites() {
    Alert.alert(
      'Success!',
      'Your group is updated sucessfully! Enjoy' ,
      [
        { text: 'Awesome', onPress: () => this.props.navigation.navigate('MyGroups') },
      ],
      { cancelable: false }
    )
    // console.log(this.state.selectedChecklist);
    // alert(JSON.stringify(this.state.selectedChecklist));
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
          <Body style={{ flex: 3 }}>
            <Title>Update Group</Title>
          </Body>
          <Right />
        </Header>

        <Content>

        <Form>
            <Item inlineLabel>
              <Label>Group Name</Label>
              <Input value="Lunch Dudes"/>
            </Item>
          </Form>
          <Item>
          <FlatList style={{ height: 450, marginBottom: 40 }}
            extraData={this.state}
            keyExtractor={(item,index)=>item.id}
            data = {this.state.datas}
            renderItem = {({ item }) =>{
             return <ListItem avatar>
                <Left>
                  <Thumbnail small source={item.img} />
                </Left>
                <Body>
                  <Text>
                    {item.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {item.note}
                  </Text>
                </Body>
                <Right>
                <CheckBox style={{ marginRight: 12, marginTop: 8 }} checked={this.state.selectedChecklist.includes(item.id) ? true : false}
                    onPress={()=>this.onCheckBoxPress(item.id)} color="green"/>
                </Right>
              </ListItem>
              }}
          />
          </Item>
          <Button full onPress={() => this.sendInvites()}>
            <Text>Update Group</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default EditGroup;
