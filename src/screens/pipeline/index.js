

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
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
  Thumbnail
} from "native-base";
import Timeline from 'react-native-timeline-flatlist'

export default class Pipeline extends Component {
  constructor() {
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.onRefresh = this.onRefresh.bind(this)

    this.data = [
      {
        time: 'External',
        title: 'Care Radius (Horizon)',
        description: 'Delayed due to Covid-19',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: 'External',
        title: 'Audit (Horizon)',
        description: 'Blocked',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: 'External',
        title: 'Special Deals (Horizon)',
        description: 'Resource gathering',
        icon: '',
      },
      {
        time: 'External',
        title: 'Control & Balance (Horizon)',
        description: 'Discussion',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'External',
        title: 'Writeoff Refund (Horizon- SP2Cloud)',
        description: 'Requested POC',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      },
      {
        time: 'External',
        title: 'Control & Balance (Horizon)',
        description: 'Team Formation',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'Internal',
        title: 'Control & Balance (Horizon)',
        description: 'Requirement Analysis',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'Internal',
        title: 'Control & Balance (Horizon)',
        description: 'Delayed due to Covid-19',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'Internal',
        title: 'Control & Balance (Horizon)',
        description: 'Proposed',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: 'Internal',
        title: 'Control & Balance (Horizon)',
        description: 'Blocked',
        lineColor: '#009688',
        icon: '',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      }
    ]
    this.state = {
      isRefreshing: false,
      waiting: false,
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
      return <Text style={{ marginTop: 10, marginBottom: 20 }}>Selected Project: {this.state.selected.title} {`\n`} {this.state.selected.time}</Text>
  }

  send() {
    this.setState({ defaultAnimationDialog: false });
    Alert.alert(
      'Information!',
      'An email notification has been sent to Tanay Guha. You might get a call based on availability!',
      [
        {text: 'Haan Thik Hai!', onPress: () =>  console.log('Yup Pressed!')},
      ],
      { cancelable: true }
    )
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
            <Title>LAB Pipeline</Title>
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
              timeContainerStyle={{ minWidth: 52, marginTop: 5 }}
              titleStyle={{ fontSize: 12 }}
              timeStyle={{ fontSize: 10, textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
              descriptionStyle={{ color: 'gray', padding: 0 }}
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
              columnFormat='single-column-right'
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
                    onPress= {() =>  this.send()}
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

                <Form style={{ marginTop: 20 }}>
                  <Item regular>
                    <Textarea rowSpan={5} placeholder="Write what makes you go gaga about this project" />
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

  }
});
