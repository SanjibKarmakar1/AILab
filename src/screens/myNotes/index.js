import React, { Component } from "react";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import { View, ListView, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  CheckBox,
  Text,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Segment,
  Fab,
  Form,
  Item,
  Picker,
  Label,
  Input
} from "native-base";
import styles from "./styles";

const datas = [
  "Task 1",
  "Task 2",
  "Task 3",
  "Task 4",
  "Task 5",
  "Task 6",
  "Task 7",
  "Task 8"
];

const specialdatas = [
  "Raise VPN Request",
  "VDI not working, consult with taras",
  "Knowledge Sharing: Angular Reactive Form",
  "Study: Kubernetes"
];

class MyNotes extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: false,
      seg: 2,
      basic: true,
      listViewData: datas,
      specialListViewData: specialdatas,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false,
      active: false,
      active1: false,
      active2: false,
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  deleteRowSpecial(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.specialListViewData];
    newData.splice(rowId, 1);
    this.setState({ specialListViewData: newData });
  }

  saveProgress() {
    Alert.alert(
      'Success!',
      'Your progress is saved!',
      [
        { text: 'Ok', onPress: () => console.log('Yup Pressed!') },
      ],
      { cancelable: true }
    )
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
          <Body>
            <Title>My Notes</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>To Dos</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Scheduled</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
            <Text>Special</Text>
          </Button>
        </Segment>

        <Content padder>
          {this.state.seg === 1 && 
          <Content>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>Lunch Break</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="red"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Daily Stand Up @ 12:30PM</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>

          <Button style={{ marginTop: 200}} full onPress={() => this.saveProgress()}>
            <Text>Save Progress</Text>
          </Button>

          <Fab
            active={this.state.active}
            direction="up"
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="logo-freebsd-devil" />
            <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
              this.setState({
                defaultAnimationDialog: true,
              });
            }}>
              <Icon name="ios-add-circle" />
            </Button>
            <Button disabled style={{ backgroundColor: '#3B5998' }}>
              <Icon name="bookmark" />
            </Button>
          </Fab>

        </Content>}
          {this.state.seg === 2 && 
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
                onPress={() => alert(data)}
                style={{
                  backgroundColor: "#CCC",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="information-circle" />
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

          <Fab
            active={this.state.active2}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 20 }}
            position="bottomRight"
            onPress={() => this.setState({ active2: !this.state.active2 })}>
            <Icon name="logo-freebsd-devil" />
            <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
              this.setState({
                scaleAnimationDialog: true,
              });
            }}>
              <Icon name="ios-add-circle" />
            </Button>
            <Button disabled style={{ backgroundColor: '#3B5998' }}>
              <Icon name="bookmark" />
            </Button>
          </Fab>


        </Content>
        }
          {this.state.seg === 3 && 
          <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.specialListViewData)}
            renderRow={data =>
              <ListItem style={{ paddingLeft: 20 }}>
                <Text>
                  {data}
                </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                onPress={() => alert(data)}
                style={{
                  backgroundColor: "#CCC",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRowSpecial(secId, rowId, rowMap)}
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

          <Fab
            active={this.state.active1}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginTop: 200 }}
            position="bottomRight"
            onPress={() => this.setState({ active1: !this.state.active1 })}>
            <Icon name="logo-freebsd-devil" />
            <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
              this.setState({
                slideAnimationDialog: true,
              });
            }}>
              <Icon name="ios-add-circle" />
            </Button>
            <Button disabled style={{ backgroundColor: '#3B5998' }}>
              <Icon name="bookmark" />
            </Button>
          </Fab>

        </Content>
        }
        </Content>

        
        <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Add ToDo Notes"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Close"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="Save"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Form>
            <Item regular>
              <Label>Task Title</Label>
              <Input />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Status"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="ToDo" value="todo" />
                <Picker.Item label="Started" value="started" />
                <Picker.Item label="In Progress" value="inprogress" />
                <Picker.Item label="Completed" value="completed" />
              </Picker>

            </Item>
          </Form>
          </DialogContent>
        </Dialog>


        <Dialog
          onDismiss={() => {
            this.setState({ scaleAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.scaleAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Add Scheduled Notes"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Close"
                bordered
                onPress={() => {
                  this.setState({ scaleAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="Save"
                bordered
                onPress={() => {
                  this.setState({ scaleAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Form>
            <Item regular>
              <Label>Task Name</Label>
              <Input />
            </Item>
          </Form>
          </DialogContent>
        </Dialog>


        <Dialog
          onDismiss={() => {
            this.setState({ slideAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.slideAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Add Special Notes"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Close"
                bordered
                onPress={() => {
                  this.setState({ slideAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="Save"
                bordered
                onPress={() => {
                  this.setState({ slideAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Form>
            <Item regular>
              <Label>Task Name</Label>
              <Input />
            </Item>
          </Form>
          </DialogContent>
        </Dialog>
        

       </View>
      </Container>
    );
  }
}

export default MyNotes;
