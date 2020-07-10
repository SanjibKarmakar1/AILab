import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Icon,
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
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from './validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the Lab Survey! Tap next to continue'
    },
    {
        questionType: 'TextInput',
        questionText: 'What is your current project name?',
        questionId: 'favoriteColor',
        placeholderText: 'Current Project!',
    },
    {
        questionType: 'NumericInput',
        questionText: 'On a scale of 1 to 10, how would you rate your work-life balance?',
        questionId: 'favoriteNumber',
        placeholderText: '',
    },
    {
        questionType: 'NumericInput',
        questionText: 'On a scale of 1 to 10, how challenged are you on a daily basis at work?',
        questionId: 'jugglingBalls',
        defaultValue: '0'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you feel like you are progressing professionally at Lab?',
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            },
            {
                optionText: 'Who Cares',
                value: 'DontCare'
            },
            {
                optionText: 'Not Sure',
                value: 'NotSure'
            },
            {
                optionText: 'It doesn"t matter',
                value: 'noMatter'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Are you satisfied with number of team lunches',
        questionId: 'favoriteFoods',
        questionSettings: {
            maxMultiSelect: 2,
            minMultiSelect: 1,
        },
        options: [
            {
                optionText: 'What was that again?',
                value: 'sticky rice dumplings'
            },
            {
                optionText: 'kanjoos Account',
                value: 'pad thai'
            },
            {
                optionText: 'SomeWhat',
                value: 'steak and eggs'
            },
            {
                optionText: 'Ok Ok',
                value: 'tofu'
            },
            {
                optionText: 'Dimaag mat chaato yaar',
                value: 'ice cream'
            },
            {
                optionText: 'No means No',
                value: 'injera'
            },
            {
                optionText: 'I prefer cash',
                value: 'biryani'
            },
            {
                optionText: 'hell Yeah',
                value: 'tamales'
            },
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'What were reasons you joined Lab? Select two ',
        questionId: 'relax',
        questionSettings: {
            maxMultiSelect: 2,
            minMultiSelect: 2,
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'I was on bench',
                value: 'reading'
            },
            {
                optionText: 'My previous project was stupid',
                value: 'vacations'
            },
            {
                optionText: 'Love lab work culture',
                value: 'meals'
            },
            {
                optionText: 'Wanted to research since childhood',
                value: 'ocean'
            },
            {
                optionText: 'Someone told me its good',
                value: 'oceang'
            },
            {
                optionText: 'I was forced',
                value: 'oceang'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'If Lab had a theme song, what would it be and why?',
        questionId: 'radio',
        questionSettings: {
            allowDeselect: false,
        },
        options: [
            {
                optionText: 'baby doll main sone di',
                value: 'option 1'
            },
            {
                optionText: 'Jab tak rahega samose me aloo',
                value: 'option 2'
            },
            {
                optionText: 'Main hoon don',
                value: 'option 3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Are we a better team now than we were six months ago? ',
        questionId: 'singleDefault',
        questionSettings: {
            defaultSelection: 0
        },
        options: [
            {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            },
        ]
    },
    /* {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'And of course it supports multiple defaults: ',
        questionId: 'multipleDefaults',
        questionSettings: {
            defaultSelection: [0, 2],
            maxMultiSelect: 2,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'This is the first default option',
                value: 'first default'
            },
            {
                optionText: 'This is the first alternate option',
                value: 'first alternative'
            },
            {
                optionText: 'This is the second default option',
                value: 'second default'
            },
            {
                optionText: 'This is the second alternate option',
                value: 'second alternative'
            },
        ]
    }, */
    {
        questionType: 'Info',
        questionText: 'That is all for this survey, tap finish to exit!'
    },
];

export default class TakeSurvey extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: PURPLE, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        /** 
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         * 
         *  Answers are returned in an array, of the form 
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *  
         *  As an example
         *  { 
         *      questionId: "favoritePet", 
         *      value: { 
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a 
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */

        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompletedScreen', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
               {/*  <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView> */}
                
            </View>
          
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
        elevation: 20,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',
        
        
        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {
        
        minHeight: 40,
        backgroundColor: GREEN,
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});