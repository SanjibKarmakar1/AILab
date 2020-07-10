



import React, { Component } from 'react';
import { Alert, View } from "react-native";
import { Container, Header, Content, Form, Item, Picker, Icon, Button, Text, ListItem, CheckBox, Body, Textarea,
    Left,
    Right,
    Title
 } from 'native-base';
class LocationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: undefined,
            selected2: undefined,
            itemSelected: false,
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    onValueChange1(value) {
        this.setState({
            selected1: value
        });
    }
    confirmSent = () => {
        Alert.alert(
            'Confirmation!',
            'Locaton Shared!',
            [
                { text: 'Ok', onPress: () => console.log('ok Pressed!') }
            ],
            { cancelable: true }
        )
    }
    render() {
        return (
            <Container>
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
                <Content>
                    <Form>

                        <ListItem style={{ marginTop: 20 }} >
                            <CheckBox onPress={() => this.setState({ itemSelected: !this.state.itemSelected })} checked={this.state.itemSelected} color="green" />
                            <Body>
                                <Text>Set Custom Location</Text>
                            </Body>
                        </ListItem>

                        { !this.state.itemSelected && 
                        <View>
                        <Item picker style={{ marginTop: 20 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Your City"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item value='' label='Select City' />
                                <Picker.Item label="Kolkata" value="Kolkata" />
                                <Picker.Item label="Bangalore" value="Bangalore" />
                                <Picker.Item label="Pune" value="Pune" />
                                <Picker.Item label="Hyderabad" value="Hyderabad" />
                                <Picker.Item label="Mumbai" value="Mumbai" />
                                <Picker.Item label="NCR" value="NCR" />
                                <Picker.Item label="Chennai" value="Chennai" />
                            </Picker>
                        </Item>

                        <Item picker style={{ marginTop: 20 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Your Location"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange1.bind(this)}
                            >
                                <Picker.Item value='' label='Select Location' />
                                <Picker.Item label="DLF 2 SEZ (CLOVE)" value="key0" />
                                <Picker.Item label="DLF Tower B (Cardamom)" value="key1" />
                                <Picker.Item label="DLF Tower B 2nd Floor (Pantry)" value="key2" />
                                <Picker.Item label="DLF Tower B 6th Floor A Wing (Pantry)" value="key3" />
                                <Picker.Item label="DLF Tower B 7th Floor (Pantry)" value="key4" />
                                <Picker.Item label="DLF Tower B 9th Floor (Pantry)" value="key5" />
                                <Picker.Item label="DLF Tower C (Cinnamon)" value="key6" />
                            </Picker>
                        </Item>
                        </View>
                        }
                        { this.state.itemSelected && 
                        <Textarea  style={{ marginTop: 20 }} rowSpan={5} bordered placeholder="Custom Location" />
                        }
                        <Button style={{ marginTop: 20 }} full info onPress={() => this.confirmSent()}>
                            <Text>Send Location</Text>
                        </Button>


                    </Form>
                </Content>
            </Container>
        );
    }
}
export default LocationContent;