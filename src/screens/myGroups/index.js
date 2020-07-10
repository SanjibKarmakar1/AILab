import React, { Component } from "react";
import { ListView } from "react-native";
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
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const datas = [
  "My Cubical",
  "My Project",
  "Horizon",
  "Lunch Buddies",
  "SP2Cloud Team",
  "Evening Snacks Partners",
  "Smoking Boyz",
  "My Dudes"
];

class MyGroups extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
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
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>My Groups</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem style={{ paddingLeft: 20 }}>
                <Text>
                  {data}
                </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                onPress={() => this.props.navigation.navigate('EditGroup')}
                success
              >
                <Icon active name="create" style={{ color: "#FFF" }} />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />

          <Button full  onPress={() => this.props.navigation.navigate('CreateEditGroup')}>
            <Text>Create New Group</Text>
          </Button>


        </Content>
      </Container>
    );
  }
}

export default MyGroups;

// onPress={() => alert(data)}