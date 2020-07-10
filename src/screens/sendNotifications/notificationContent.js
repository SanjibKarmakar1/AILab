import React, { Component } from 'react';
import { Alert } from "react-native";
import {
    Container, Header, Content, Item, Input, Icon,
    Title,
    Text,
    Button,
    Left,
    Right,
    Body,
    Form,
    Textarea
} from 'native-base';
import styles from "./styles";
class NotificationContent extends Component {

    confirmSent = () => {
        Alert.alert(
            'Confirmation!',
            'Notification Sent!',
            [
                { text: 'Ok', onPress: () => console.log('ok Pressed!') }
            ],
            { cancelable: true }
        )
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
                    <Body>
                        <Title>Content</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {/* <Item>
            <Icon active name='home' />
            <Input placeholder='Icon Textbox'/>
          </Item>
          <Item>
            <Input placeholder='Icon Alignment in Textbox'/>
            <Icon active name='swap' />
          </Item> */}
                    <Form>
                            <Input placeholder='Notification Title' />
                        <Textarea style={{ marginTop: 20, marginBottom: 40 }} rowSpan={5} bordered  placeholder="Notification Content" />
                        <Button block onPress={() => this.confirmSent()}>
                            <Text>Send Notification</Text>
                        </Button>


                    </Form>
                </Content>
            </Container>
        );
    }
}

export default NotificationContent;
