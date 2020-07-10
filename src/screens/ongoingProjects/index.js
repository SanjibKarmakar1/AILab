

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
  Alert
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
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
  Thumbnail,
  ListItem,
  Radio
} from "native-base";
import Timeline from 'react-native-timeline-flatlist'

export default class OngoingProjects extends Component {
  constructor() {
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.onRefresh = this.onRefresh.bind(this)

    this.data = [
      {
        time: 'ETA: Q3 2020',
        title: 'US Bank',
        description: 'POC: Tanay Guha',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: 'ETA: Q4 2021',
        title: 'Audit (Amazon)',
        description: 'POC: Aditya Sengupta',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: 'ETA: Q1 2022',
        title: 'Special Deals (Barclays)',
        description: 'POC: Ravi Guduru',
        icon: '',
      },
      {
        time: 'ETA: Q3 2021',
        title: 'Control & Balance (Horizon)',
        description: 'POC: Mainak Mondal. ',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'ETA: Q1 2021',
        title: 'Toyota',
        description: 'POC: Amit Kumar',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      },
      {
        time: 'ETA: Q1 2023',
        title: 'Tata Steel',
        description: 'POC: Meghnath Saha',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'ETA: Q4 2020',
        title: 'Daily Hunt',
        description: 'POC: Anirnaya Aich',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'ETA: Q4 2020',
        title: 'Zomato',
        description: 'POC: Tanay Guha',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'ETA: Q4 2020',
        title: 'Control & Balance (Horizon)',
        description: 'POC: Mainak Mondal ',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'ETA: Q4 2020',
        title: 'Control & Balance (Horizon)',
        description: 'POC: Amit Kumar ',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      }
    ]
    this.state = {
      isRefreshing: false,
      waiting: false,
      itemSelected: 'itemOne',
      data: this.data,
      defaultAnimationDialog: false,
      selected: {
        'title': 'None',
        'time': 'None'
      }
    }
  }

  onEventPress(data) {
    this.setState({ selected: data, defaultAnimationDialog: true })
  }

  renderSelected() {
    if (this.state.selected)
      return <Text style={{ marginTop: 10 }}>Selected Project: {this.state.selected.title} {`\n`} {this.state.selected.time}</Text>
  }

  onRefresh() {
    this.setState({ isRefreshing: true });
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        data: this.data,
        isRefreshing: false
      });
    }, 2000);
  }

  send() {
    this.setState({ defaultAnimationDialog: false });
    Alert.alert(
      'Information!',
      'An email notification has been sent to ' + this.state.selected.description,
      [
        { text: 'Haan Thik Hai!', onPress: () => console.log('Yup Pressed!') },
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
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Ongoing Projects</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            {this.renderSelected()}
            <Timeline
              style={styles.list}
              data={this.data}
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
              timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
              descriptionStyle={{ color: 'gray' }}
              options={{
                style: { paddingTop: 5 },
                refreshControl: (
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh}
                  />
                )
              }}
              innerCircle={'dot'}
              onEventPress={this.onEventPress}
              separator={false}
              detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10 }}
              columnFormat='two-column'
            />

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
                  title="AHA! You look interested!!"
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
                    text="Send"
                    bordered
                    onPress={() => this.send()}
                    key="button-2"
                  />
                </DialogFooter>
              }>
              <DialogContent>

                <Text>
                  Project name: {this.state.selected.title}
                  {`\n`}
                      Current Status: {this.state.selected.time}
                </Text>

                <ListItem onPress={() => this.setState({ itemSelected: 'itemOne' })}>
                  <Left>
                    <Text>Currently Working in this project</Text>
                  </Left>
                  <Right>
                    <Radio
                      selected={this.state.itemSelected == 'itemOne'} />
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.setState({ itemSelected: 'itemTwo' })}>
                  <Left>
                    <Text>Interested to work in this project</Text>
                  </Left>
                  <Right>
                    <Radio
                      selected={this.state.itemSelected == 'itemTwo'} />
                  </Right>
                </ListItem>

                <Form style={{ marginTop: 20 }}>
                  <Item regular>
                    <Textarea rowSpan={5} placeholder="In short jo bolna hai bolo, sab log busy hai aajkal !!" />
                  </Item>
                </Form>
              </DialogContent>
            </Dialog>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  list: {
    flex: 1,
    paddingTop: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});
