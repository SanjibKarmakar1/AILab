import React, { Component } from "react";
import { Image, View, Alert, Vibration } from "react-native";
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
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Fab,
  Form,
  Item,
  Label,
  Input,
  Textarea
} from "native-base";
import styles from "./styles";

const cardOne = require("../../../assets/swiper-1.png");
const cards = [
  {
    text: "ADMI Townhall on 15.06.2020",
    name: "Tanay Guha",
    image: cardOne,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem purus, iaculis sed augue in, dapibus malesuada tellus."
  },
  {
    text: "Angular Developer Required ~ 4-5Y",
    name: "Aditya Sengupta",
    image: cardOne,
    content: "Mauris tempor sapien est, et convallis metus rutrum id. Proin convallis ipsum metus, a dignissim urna luctus vel."
  },
  {
    text: "Microservice Architect for Horizon Account",
    name: "Amit Kumar",
    image: cardOne,
    content: "ulla facilisi. Proin sit amet lacus dui. Pellentesque faucibus augue vestibulum hendrerit congue. Integer vulputate, velit vitae auctor venenatis, nunc nulla sagittis tortor, ut vestibulum ligula ipsum eget magna. "
  },
  {
    text: "New Horizon Project In Pipeline",
    name: "Shaon Mazumder",
    image: cardOne,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem purus, iaculis sed augue in, dapibus malesuada tellus"
  },
  {
    text: "New opportunities coming: Kibana kaun janta hai?",
    name: "Shaon Mazumder",
    image: cardOne,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem purus, iaculis sed augue in, dapibus malesuada tellus"
  },
  {
    text: "Urgent need of a guy who knows photoshop",
    name: "Sudeshna Majumder",
    image: cardOne,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem purus, iaculis sed augue in, dapibus malesuada tellus"
  },
  {
    text: "Excell me filter kaise kare?",
    name: "Sanib karmakar",
    image: cardOne,
    content: "Ping karo agar kisiko pata hai to!"
  }
];

class LabNews extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: false,
    defaultAnimationDialog: false,
  };
  }
  
  onDeleteBTN = () => {
    Vibration.vibrate(500)
    Alert.alert(
      'Confirmation!',
      'Deleted Successfully!',
      [
        {text: 'Ok', onPress: () => console.log('ok Pressed!')}
      ],
      { cancelable: true }
    )
  }

  save() {
    this.setState({ defaultAnimationDialog: false });
    Alert.alert(
      'Success!',
      'Your news post is currently being reviewed! Will be posted here soon!',
      [
        { text: 'Ok!', onPress: () => console.log('Yup Pressed!') },
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
            <Title>Garage News</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            ref={mr => (this._deckSwiper = mr)}
            dataSource={cards}
            looping={true}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>You are updated.</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                        <Text note>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                    <Text style={{
                      width: null,
                      flex: 1,
                      height: 275,
                      padding: 15
                    }}>
                    {item.content}
                    </Text>
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-trash"} style={{ color: "#ED4A6A" }}
            onPress={() => Alert.alert(
              'Information!',
              'Are you sure you want to delete this update? Only the author of this post can delete! ',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'Yup', onPress: () =>  this.onDeleteBTN()},
              ],
              { cancelable: true }
            )}/> 
                </CardItem>
              </Card>}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 140,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
        <View>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            >
            <Icon name="add" onPress={() => {
              this.setState({
                defaultAnimationDialog: true,
              });
            }}/>
          </Fab>





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
              title="Add Lab Notice"
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
                onPress={() => this.save()}
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
              <Input placeholder='Title'/>
            </Item>
            <Item regular>
            <Textarea rowSpan={5} placeholder="Content" />
            </Item>
          </Form>
          </DialogContent>
        </Dialog>


          </View>
      </Container>
    );
  }
}

export default LabNews;


// Notes: Only an owner of a news can delete and edit the item: so enable an extra trash icon on that particular slide to delete