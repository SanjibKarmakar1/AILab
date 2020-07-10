import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/AiLab_logo.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
/* 
  {
    name: "Login",
    route: "Login",
    icon: "person",
    bg: "#C5F442"
  }, */
  {
    name: "My Profile",
    route: "MyProfile",
    icon: "person",
    bg: "#C5F442"
  },
  {
    name: "My Notes",
    route: "MyNotes",
    icon: "clipboard",
    bg: "#C5F442"
  },
  {
    name: "Lab News",
    route: "LabNews",
    icon: "globe",
    bg: "#C5F442"
  },
  {
    name: "My Groups",
    route: "MyGroups",
    icon: "person-add",
    bg: "#C5F442"
  },
  {
    name: "Lab Members",
    route: "LabMembers",
    icon: "people",
    bg: "#C5F442",
    types: '+1'
  },
  {
    name: "Share Location",
    route: "ShareLocation",
    icon: "locate",
    bg: "#C5F442"
  },
  {
    name: "Send Notification",
    route: "SendNotification",
    icon: "notifications",
    bg: "#C5F442"
  },
  {
    name: "Payment",
    route: "Payment",
    icon: "cash",
    bg: "#C5F442"
  },
  {
    name: "Share Document",
    route: "ShareDocument",
    icon: "document",
    bg: "#C5F442"
  },
  {
    name: "Chat",
    route: "Chat",
    icon: "chatboxes",
    bg: "#C5F442",
    types: "+3"
  },
  {
    name: "Ongoing Projects",
    route: "OngoingProjects",
    icon: "outlet",
    bg: "#C5F442"
  },
  {
    name: "Project Pipeline",
    route: "Pipeline",
    icon: "archive",
    bg: "#C5F442"
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "settings",
    bg: "#C5F442"
  },  
  {
    name: "Lab Survey",
    route: "Survey",
    icon: "help",
    bg: "#C5F442",
    types: "+1"
  },
  {
    name: "About AILab",
    route: "AboutLab",
    icon: "contacts",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 40,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types}`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
