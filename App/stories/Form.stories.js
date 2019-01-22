import React from 'react';
import { View, Text} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { BufferView } from './decorators';
import { Form, FieldWrapper, TextInput, Switch } from '../components/Form'

const defaultTextInputProps = {
    label: "Demo",
    onChangeText: action("onChangeText")
}

storiesOf("Form/Switch", module)
    .addDecorator(BufferView)
    .add("default",()=> <Switch label="Agree to terms" value/>)
    .add("with error",()=> <Switch label="Agree to terms" message="You must agree to the terms" messageType="error"/>)

storiesOf("Form/TextInput", module)
    .addDecorator(BufferView)
    .add("default", () => <TextInput {...defaultTextInputProps}/>)
    .add("with placeholder", () => <TextInput {...defaultTextInputProps} placeholder="Demo placeholder"/>)
    .add("with value", () => <TextInput {...defaultTextInputProps} value="Demo value"/>)
    .add("with error message", () => <TextInput {...defaultTextInputProps} message="Error message" messageType="error"/>)
    .add("email", () => <TextInput {...defaultTextInputProps} label="Email" value="13rojina@gmail.com" keyboardType="email-address"/>)
    .add("password", () => <TextInput {...defaultTextInputProps} label="Password" value="password" secureTextEntry/>)

storiesOf("Form/FieldWrapper", module)
    .addDecorator(BufferView)
    .add("default", () => (
        <FieldWrapper label='Email'>
            <Text> Hello Wrapper </Text>
        </FieldWrapper>
    ))
    .add("error message", ()=> (
        <FieldWrapper label='Email' message="Please enter valid email" messageType="error">
            <Text> Hello Wrapper </Text>
        </FieldWrapper>
    ))
    .add("success message", ()=> (
        <FieldWrapper label='Email' message="Looks good" messageType="success">
            <Text> Hello Wrapper </Text>
        </FieldWrapper>
    ))
    .add("multiple component", ()=> (
        <React.Fragment>
            <FieldWrapper label='Email'>
                <Text> Hello Wrapper </Text>
            </FieldWrapper>

            <FieldWrapper label='Email' message="Please enter valid email" messageType="error">
                <Text> Hello Wrapper </Text>
            </FieldWrapper>

            <FieldWrapper label='Email' message="Looks good" messageType="success">
                <Text> Hello Wrapper </Text>
            </FieldWrapper>

        </React.Fragment>
    ))
    

storiesOf("Form", module)
    .addDecorator(BufferView)
    .add("default",() => (
        <Form>
            <View style={{flex :1 , backgroundColor: '#e6e6e6'}}/>
        </Form>
    ))
    .add("with header",() => (
        <Form header="Hello">
            <View style={{flex :1 , backgroundColor: '#e6e6e6'}}/>
        </Form>
    ))
    .add("with header and footer",() => (
        <Form header="Hello" footer="Welcome back">
            <View style={{flex :1 , backgroundColor: '#e6e6e6'}}/>
        </Form>
    ))